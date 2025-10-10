import { ForbiddenException, Inject, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AuthDto, LoginDto, VerifyLogin } from './dto';
import Redis from 'ioredis';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { NotFoundError } from 'rxjs';
import sendEmail from 'src/email/email';

/**
 * Service responsible for handling authentication-related operations.
 */
@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    @Inject('REDIS') private redisClient: Redis,
    // private jwtService: JwtService,
  ) {}

  /**
   * Retrieves the status of the authentication service.
   * @returns A string indicating the status of the authentication service.
   */
  getStatus() {
    return 'Auth service is up';
  }

  /**
   * Generates a random token by combining a random string and a timestamp.
   * @returns The generated random token.
   */
  generateRandomToken(): string {
    const randomString = Math.random().toString(36).substring(2);
    const timestamp = Date.now();
    return `${randomString}${timestamp}`;
  }

  /**
   * Generates a random verification code.
   * @returns The generated verification code.
   */
  generateVerificationCode(): string {
    const code = Math.floor(1000 + Math.random() * 9000).toString();
    return code;
  }

  async sendVerificationCode(
    email: string,
    subject: string,
    text: string,
  ): Promise<boolean> {
    try {
      const res = await sendEmail(email, subject, text);
      return res;
    } catch (error) {
      return false;
    }
  }

  /**
   * Signs up a new user with the provided authentication data.
   * @param dto - The authentication data for the new user.
   * @returns The created user object.
   * @throws ForbiddenException if the username is already taken, password is less than 8 characters,
   * name or username is less than 1 character, or if the email already exists.
   */
  async signup(dto: AuthDto) {
    // async signup(dto: AuthDto, response) {
    try {
      if (
        !dto.name ||
        dto.name.length <= 1 ||
        !dto.name ||
        dto.name.length <= 1
      ) {
        return {
          status: 403,
          message: 'All feilds are required',
        };
      }

      console.log('starting...');
      const token = this.generateRandomToken();
      const verificationCode = this.generateVerificationCode();

      const subject = 'OTP for Verification';
      const text = `
      <div style="max-width: 600px; margin: 0 auto; background-color: #fff; padding: 20px; border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
      <h1 style="font-size: 20px; margin-bottom: 20px;">OTP for Verification</h1>
      <p style="font-size: 20px; margin-bottom: 20px;">
        Thank you for registering with us. <br> Your OTP is <strong>${verificationCode}</strong>. <br>Please enter this OTP to verify your account.
      </p>
      <p style="font-size: 16px; margin-top: 20px;">Regard,<br>OpenEDU team at SynthAI Lab</p>
      </div>
      `;

      const res: boolean = await this.sendVerificationCode(
        dto.email,
        subject,
        text,
      );

      if (!res) {
        throw new ForbiddenException('Error sending verification code');
      }

      try {
        await this.redisClient.set(dto.email, verificationCode);
      } catch (error) {
        throw new ForbiddenException('Error saving verification code');
      }

      console.log(dto);
      const user = await this.prisma.user.create({
        data: {
          email: dto.email,
          name: dto.name,
          token: token,
        },
      });

      console.log('user created...');

      return {
        status: 200,
        message: 'User created successfully',
        data: user,
      };
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          return {
            status: 403,
            message: 'Email already exists',
          };
        }
      }

      return {
        status: 500,
        message: 'Internal server errors',
      };
    }
  }

  /**
   * Signs in a user with the provided authentication data.
   * @param dto - The authentication data for the user.
   * @returns The signed-in user object.
   * @throws ForbiddenException if no user with the provided email is found or if the password is invalid.
   */
  async signin(dto: LoginDto) {
    // async signin(dto: LoginDto, response) {
    try {
      console.log(dto);
      const user = await this.prisma.user.findUnique({
        where: {
          email: dto.email,
        },
      });
      console.log('user', user);
      if (!user) {
        throw new ForbiddenException('User not found');
      }

      const verificationCode = this.generateVerificationCode();

      try {
        await this.redisClient.set(dto.email, verificationCode);
      } catch (error) {
        return error;
      }

      const subject = 'OTP for Verification';
      const text = `
      <div style="max-width: 600px; margin: 0 auto; background-color: #fff; padding: 20px; border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
      <h1 style="font-size: 20px; margin-bottom: 20px;">OTP for Verification</h1>
      <p style="font-size: 20px; margin-bottom: 20px;">
        Thank you for registering with us. <br> Your OTP is <strong>${verificationCode}</strong>. <br>Please enter this OTP to verify your account.
      </p>
      <p style="font-size: 16px; margin-top: 20px;">Regard,<br>OpenEDU team at SynthAI Lab</p>
      </div>
      `;
      await this.sendVerificationCode(dto.email, subject, text);

      return {
        status: 200,
        message: 'User Logged In successfully',
        data: user,
      };
    } catch (error) {
      return {
        status: 500,
        message: 'Internal Server Error',
      };
    }
  }

  async verifyUser(dto: VerifyLogin) {
    try {
      const user = await this.prisma.user.findUnique({
        where: {
          email: dto.email,
        },
      });

      if (!user) {
        throw new NotFoundError('User Not Found');
      }

      const verificationCodeInRedis = await this.redisClient.get(dto.email);

      if (verificationCodeInRedis != dto.code) {
        throw new ForbiddenException('Verification code is wrong');
      }

      const token = this.generateRandomToken();

      const userUpdated = await this.prisma.user.update({
        where: {
          email: dto.email,
        },
        data: {
          token: token,
        },
      });

      return {
        status: 200,
        message: 'Successful',
        data: user,
      };
    } catch (error) {
      return {
        status: 500,
        message: 'Internal Server Error',
      };
    }
  }
}

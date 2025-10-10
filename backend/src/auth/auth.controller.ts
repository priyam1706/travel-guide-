import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto, LoginDto, VerifyLogin } from './dto';
import { ApiBody } from '@nestjs/swagger';
// import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Get('status')
  getStatus() {
    return this.authService.getStatus();
  }

  @Post('signup')
  @ApiBody({ type: AuthDto })
  signup(@Body() dto: AuthDto) {
    return this.authService.signup(dto);
  }

  @Post('signin')
  @ApiBody({ type: LoginDto })
  signin(@Body() dto: LoginDto) {
    return this.authService.signin(dto);
  }

  @Post('verify')
  @ApiBody({ type: VerifyLogin })
  verifyLogin(@Body() dto: VerifyLogin) {
    return this.authService.verifyUser(dto);
  }
}

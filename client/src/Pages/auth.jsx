import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const AuthorizationPage = () => {
  const [code, setCode] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [verificationResult, setVerificationResult] = useState('');

  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const emailParam = searchParams.get('email');
    if (emailParam) {
      setEmail(emailParam);
    }
  }, [location]);

  const handleVerifyCode = async () => {
    setLoading(true);
    setErrorMessage(null);
    
    // Simulate sending OTP to the user's email
    try {
      // Simulate API call to send OTP
      const response = await fetch('http://localhost:4000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }), // Send the user's email to the backend
      });
  
      if (response.ok) {
        setVerificationResult('OTP sent successfully! Check your email.');
      } else {
        throw new Error('Failed to send OTP. Please try again.');
      }
    } catch (error) {
      console.error('Error sending OTP:', error);
      setErrorMessage('Failed to send OTP. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className="flex justify-center items-center h-full min-h-screen mb-20">
      <div className="max-w-md bg-white rounded-lg overflow-hidden shadow-lg transform ">
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-4">Authorization Page</h1>
          <p>An authorization code has been sent to your email: {email}</p>
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Enter the code"
            className="w-full mt-4 p-2 border border-gray-300 rounded-md"
          />
          <button
            onClick={handleVerifyCode}
            disabled={loading}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
          >
            {loading ? 'Verifying Code...' : 'Verify Code'}
          </button>
          <p className="mt-2">{verificationResult}</p>
        </div>
      </div>
    </div>
  );
};

export default AuthorizationPage;

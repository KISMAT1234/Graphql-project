import { ApolloError } from 'apollo-server-express';
import jwt from 'jsonwebtoken'

export class AuthenticationError extends ApolloError {
    constructor(message: string) {
      super(message, 'AUTHENTICATION_ERROR');
    }
}

export class TokenExpiredError extends ApolloError {
    constructor() {
      super('Token has expired', 'TOKEN_EXPIRED');
    }
}

export interface TokenPayload {
    userId: string;
    role: string;
    sessionId: string;
    iat: number;
    exp: number;
  }
  

export const authenticate = (token: string): TokenPayload => {
    try {
        if (!token) {
            throw new AuthenticationError('No token provided');
        }
        console.log('inside verify')

        const decodedToken =  jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key') as TokenPayload

        return decodedToken

    } catch (error) {
        console.log(error,'error in authentication')
      if (error instanceof jwt.TokenExpiredError) {
        throw new TokenExpiredError();
      }
      if (error instanceof AuthenticationError) {
        throw error;
      }
      throw new AuthenticationError('Invalid token');
    }
}


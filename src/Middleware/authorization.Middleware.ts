import { ApolloError } from 'apollo-server';
import { Request, Response, NextFunction } from 'express';
import { TokenPayload } from './authentication.Middleware';

// Extend the Request type to include 'user' property
declare global {
  namespace Express {
    interface Request {
      user?: TokenPayload; // Add the 'user' field to the Request object
    }
  }
}

export class AuthenticationError extends ApolloError {
    constructor(message: string) {
        super(message, 'AUTHENTICATION_ERROR');
    }
}

export const authorize = (roles: string[]) => {
    return (req: Request, res: Response, next: NextFunction): void => {
        const user = req.user;
    
        if (!user) {
            throw new AuthenticationError('Unauthorized: You must be logged in to access this resource');
        }
    
        // Check if user has the required role
        if (!roles.includes(user.role)) {
            throw new AuthenticationError('Forbidden: Insufficient permissions');
        }
    
        next();
    };
};

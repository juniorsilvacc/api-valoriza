import { AppError } from '@shared/errors/AppError';
import { NextFunction, Request, Response } from 'express';
import authConfig from '@config/auth';
import { verify } from 'jsonwebtoken';

interface IPayload {
  sub: string;
}

export function ensureAuthenticade(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError('Token missing', 401);
  }

  const [, token] = authHeader.split(' ');

  try {
    const { sub } = verify(token, authConfig.jwt.secret) as IPayload;

    request.user_id = sub;

    next();
  } catch {
    throw new AppError('Invalid token!', 401);
  }
}

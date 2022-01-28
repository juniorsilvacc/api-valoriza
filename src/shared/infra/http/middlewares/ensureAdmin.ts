import { UsersRepository } from '@modules/users/infra/typeorm/repositories/UsersRepository';
import { NextFunction, Request, Response } from 'express';

export async function ensureAdmin(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const { user_id } = request;

  const usersRepository = new UsersRepository();

  const admin = await usersRepository.findById(user_id);

  if (admin) {
    return next();
  }

  return response.status(401).json({
    error: 'Unauthorized',
  });
}

import { UsersRepository } from '@modules/users/infra/typeorm/repositories/UsersRepository';
import { AppError } from '@shared/errors/AppError';
import { NextFunction, Request, Response } from 'express';

export async function ensureAdmin(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const { user_id } = request;

  const usersRepository = new UsersRepository();

  const user = await usersRepository.findById(user_id);

  if (!user?.admin) {
    throw new AppError("Unauthorized. User isn't admin!", 401);
  }

  return next();
}

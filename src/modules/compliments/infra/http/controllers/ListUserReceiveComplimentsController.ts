import { ListUserReceiveComplimentsService } from '@modules/compliments/services/ListUserReceiveComplimentsService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class ListUserReceiveComplimentsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { user_id } = request;

    const listUserReceiveComplimentsService = container.resolve(
      ListUserReceiveComplimentsService,
    );

    const compliments = await listUserReceiveComplimentsService.execute(
      user_id,
    );

    return response.json(compliments);
  }
}

export { ListUserReceiveComplimentsController };

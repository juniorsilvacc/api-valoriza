import { ListUserSendComplimentsService } from '@modules/compliments/services/ListUserSendComplimentsService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class ListUserSendComplimentsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { user_id } = request;

    const listUserSendComplimentsService = container.resolve(
      ListUserSendComplimentsService,
    );

    const compliments = await listUserSendComplimentsService.execute(user_id);

    return response.json(compliments);
  }
}

export { ListUserSendComplimentsController };

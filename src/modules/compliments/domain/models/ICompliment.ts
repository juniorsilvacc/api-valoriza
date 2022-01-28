import { Tag } from '@modules/tags/infra/typeorm/entities/Tag';
import { User } from '@modules/users/infra/typeorm/entities/User';

interface ICompliment {
  id: string;
  user_sender: string;
  userSend: User;
  user_receiver: string;
  userReceiver: User;
  tag_id: string;
  tag: Tag;
  message: string;
  created_at: Date;
}

export { ICompliment };

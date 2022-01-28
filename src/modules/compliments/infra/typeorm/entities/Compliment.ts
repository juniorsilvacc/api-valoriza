import { ICompliment } from '@modules/compliments/domain/models/ICompliment';
import { Tag } from '@modules/tags/infra/typeorm/entities/Tag';
import { User } from '@modules/users/infra/typeorm/entities/User';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('compliments')
class Compliment implements ICompliment {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  user_sender: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_sender' })
  userSend: User;

  @Column()
  user_receiver: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_receiver' })
  userReceiver: User;

  @Column()
  tag_id: string;

  @ManyToOne(() => Tag)
  @JoinColumn({ name: 'tag_id' })
  tag: Tag;

  @Column()
  message: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Compliment };

import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import User from '../../../../user/infra/typeorm/entities/User';
import Chat from './Chat';

@Entity('chat_user')
class ChatUser {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  user_id: string;

  @ManyToOne(() => User, u => u.email, { eager: true })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column()
  chat_id: string;

  @ManyToOne(() => Chat, c => c.id, { eager: true })
  @JoinColumn({ name: 'chat_id' })
  chat: Chat;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default ChatUser;

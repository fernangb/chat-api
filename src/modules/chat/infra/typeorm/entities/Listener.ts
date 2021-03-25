import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import Chat from './Chat';

@Entity('listener')
class Listener {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

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

export default Listener;

import User from '../../user/infra/typeorm/entities/User';
import Chat from '../infra/typeorm/entities/Chat';

export default interface IJoinChatDTO {
  chat: Chat;
}

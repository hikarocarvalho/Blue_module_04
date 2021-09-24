import { Message } from './Message';
import { MessageDto } from './MessageDto';
export declare class MessageService {
    private messages;
    findAll(): Message[];
    findeById(id: number): Promise<Message>;
    create(messageDto: MessageDto): Message;
    update(id: number, messageDto: MessageDto): Message;
    delete(id: Number): boolean;
}

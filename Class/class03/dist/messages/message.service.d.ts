import { Message } from './Message';
export declare class MessageService {
    private messages;
    findAll(): Message[];
    findeById(id: number): Promise<Message>;
    create(message: Message): string;
    update(message: Message, id: number): string;
    delete(id: Number): string;
}

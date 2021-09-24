import { MessageService } from './messages.service';
import { Message } from './Message';
import { MessageDto } from './MessageDto';
export declare class MessagesController {
    private readonly messageService;
    constructor(messageService: MessageService);
    getMessage(): any;
    getById(params: any): Promise<Message>;
    create(messageDto: MessageDto): Message;
    update(params: any, messageDto: MessageDto): Message;
    delete(params: any): boolean;
}

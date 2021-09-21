import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { MessageService } from './MessageService';
@Module({
    controllers: [MessagesController],
    providers: [MessageService],
})
export class MessagesModule {}

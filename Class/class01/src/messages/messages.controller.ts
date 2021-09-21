import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { MessageService } from './message.service';
import { Message } from './Message';
@Controller('messages')
export class MessagesController {
    constructor(private readonly messageService: MessageService) {}
    @Get()
    getMessage():any{
        return this.messageService.findAll();
    }
    @Get(':id')
    getById(@Param() params){
        return this.messageService.findeById(+params.id);
    }
    @Post()
    create(@Body() message:Message){
        return this.messageService.create(message);
    }
    @Put(':id')
    update(@Body() message:Message,@Param() params){
        return this.messageService.update(message,+params.id);
    }
    @Delete(':id')
    delete(@Param() params){
        return this.messageService.delete(+params.id);
    }
}

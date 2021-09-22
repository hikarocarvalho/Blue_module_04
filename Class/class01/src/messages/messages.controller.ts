import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put } from '@nestjs/common';
import { MessageService } from './messages.service';
import { NotFoundError } from 'rxjs';
import { Message } from './Message';
import { MessageDto } from './MessageDto';

@Controller('messages')
export class MessagesController {
    constructor(private readonly messageService: MessageService) {}
    @Get()
    getMessage():any{
        return this.messageService.findAll();
    }
    @Get(':id')
    getById(@Param() params){
        return this.messageService.findeById(+params.id).catch((e)=>{
            throw new NotFoundException(e.message);
        });
    }
    @Post()
    create(@Body() messageDto: MessageDto){
        return this.messageService.create(messageDto);
    }
    @Put(':id')
    update(@Param() params,@Body() messageDto:MessageDto){
        return this.messageService.update(+params.id,messageDto);
    }
    @Delete(':id')
    delete(@Param() params){
        return this.messageService.delete(+params.id);
    }
}

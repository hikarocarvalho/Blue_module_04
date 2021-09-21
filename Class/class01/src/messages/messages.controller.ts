import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { MessageService } from './MessageService';
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
    create(@Body() body:any){
        return this.messageService.create(body);
    }
    @Put(':id')
    update(@Body() body:any,@Param() params){
        return this.messageService.update(body,+params.id);
    }
    @Delete(':id')
    delete(@Param() params){
        return this.messageService.delete(+params.id);
    }
}

import { Injectable } from '@nestjs/common';
import { Message } from './Message';
import { MessageDto } from './MessageDto';
@Injectable()
export class MessageService {
    
    private messages : Message[] = [
        {
            id: 1,
            texto: "primeira mensagem"
        },
        {
            id: 2,
            texto: "segunda mensagem"
        }
    ]

    findAll(){
        return this.messages.filter(Boolean);
    }

    async findeById(id:number){
        const message = this.messages.find(message => message.id === id);
        if(!message){
            throw Error (`mensagem com id ${id} não encontrada`);
        }
        return message;
    }

    create(messageDto:MessageDto) {
        const id = this.messages.length +1;
        const message : Message={
            id,
            ...messageDto,
        }
        this.messages.push(message);
        return message;
    }

    update(id: number,messageDto: MessageDto) {
        const index = this.messages.findIndex(actualMessage => actualMessage.id === id);
        const message : Message={
            id,
            ...messageDto,
        }
        this.messages[index] = message;
        return message;
    }

    delete(id:Number){
        const index = this.messages.findIndex(message => message.id === id);
        this.messages.splice(index,1);
        return true;
    }
}

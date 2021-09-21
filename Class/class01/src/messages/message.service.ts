import { Injectable } from '@nestjs/common';
import { Message } from './Message';
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
        return this.messages;
    }
    findeById(id:number){
        return this.messages.find(message => message.id === id);
    }
    create(message:Message) {
        this.messages.push(message);
        return "mensagem adicionada";
    }
    update(message: Message, id: number) {
        const index = this.messages.findIndex(actualMessage => actualMessage.id === id);
        this.messages[index].texto = message.texto;
        return "mensagem atualizada com sucesso";
    }
    delete(id:Number){
        const index = this.messages.findIndex(message => message.id === id);
        this.messages.splice(index,1);
        return "você removeu um objeto da lista";
    }
}

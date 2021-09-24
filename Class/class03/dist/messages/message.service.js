"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageService = void 0;
const common_1 = require("@nestjs/common");
let MessageService = class MessageService {
    constructor() {
        this.messages = [
            {
                id: 1,
                texto: "primeira mensagem"
            },
            {
                id: 2,
                texto: "segunda mensagem"
            }
        ];
    }
    findAll() {
        return this.messages.filter(Boolean);
    }
    async findeById(id) {
        const message = this.messages.find(message => message.id === id);
        if (!message) {
            throw Error(`mensagem com id ${id} não encontrada`);
        }
        return message;
    }
    create(message) {
        this.messages.push(message);
        return "mensagem adicionada";
    }
    update(message, id) {
        const index = this.messages.findIndex(actualMessage => actualMessage.id === id);
        this.messages[index].texto = message.texto;
        return "mensagem atualizada com sucesso";
    }
    delete(id) {
        const index = this.messages.findIndex(message => message.id === id);
        this.messages.splice(index, 1);
        return "você removeu um objeto da lista";
    }
};
MessageService = __decorate([
    (0, common_1.Injectable)()
], MessageService);
exports.MessageService = MessageService;
//# sourceMappingURL=message.service.js.map
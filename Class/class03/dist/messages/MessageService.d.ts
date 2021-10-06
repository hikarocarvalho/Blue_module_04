export declare class MessageService {
    private messages;
    findAll(): any;
    findeById(id: number): any;
    create(message: {
        id: number;
        texto: string;
    }): string;
    update(body: any, id: number): string;
    delete(id: Number): string;
}

import { IsNotEmpty , IsString , IsDate } from "class-validator";

export class MessageDto{
    @IsString({message: "O texto da mensagem deve ser uma string!"})
    @IsNotEmpty({message: "O texto da mensagem não pode ser vazio!"})
    gameName: string;

    @IsString({message: "O texto da mensagem deve ser uma string!"})
    @IsNotEmpty({message: "O texto da mensagem não pode ser vazio!"})
    gameGender: string;

    @IsString({message: "O texto da mensagem deve ser uma string!"})
    @IsNotEmpty({message: "O texto da mensagem não pode ser vazio!"})
    gameVendor: string;

    @IsString({message: "O texto da mensagem deve ser uma string!"})
    @IsNotEmpty({message: "O texto da mensagem não pode ser vazio!"})
    gamePhotoUrl: string;
    
    @IsDate({message:"the value need to have a date content"})
    gameYear: Date;
}
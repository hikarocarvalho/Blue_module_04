import { Gender } from "../entities/gender.entity";
import { Prisma } from ".prisma/client";
import { IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { CreateGameGenderDto } from "src/game-gender/dto/create-game-gender.dto";
export class CreateGenderDto extends Gender{
    @IsString()
    @IsNotEmpty()
    name:     string;
    @IsInt()
    @IsOptional()
    game?:      CreateGameGenderDto[];
}

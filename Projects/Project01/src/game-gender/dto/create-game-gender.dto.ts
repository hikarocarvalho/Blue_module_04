import { IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { GameGender } from "../entities/game-gender.entity";

export class CreateGameGenderDto extends GameGender{
    @IsInt()
    gameId: number;
    @IsInt()
    genderId: number;
}

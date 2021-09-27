import { Prisma } from ".prisma/client";
import { IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { Game } from "../entities/game.entity";
export class CreateGameDto extends Game{
    @IsString()
    @IsNotEmpty()
    title:          string;
    @IsString()
    @IsNotEmpty()
    folder:         string;
    @IsNotEmpty()
    @IsString()
    description:    string;
    @IsNotEmpty()
    @IsInt()
    year:           number;
    @IsNotEmpty()
    @IsInt()
    score:          number;
    @IsString()
    @IsOptional()
    youtubeUrl?:    string | null;
    @IsString()
    @IsOptional()
    gamePlayUrl?:   string | null;
    @IsOptional()
    @IsInt()
    users?:         Prisma.ListOfGamesUncheckedCreateNestedManyWithoutGameInput;
    @IsInt()
    @IsOptional()
    gender?:        Prisma.GameGenderUncheckedCreateNestedManyWithoutGameInput;
}

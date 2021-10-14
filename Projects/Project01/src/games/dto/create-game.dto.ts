import { Prisma } from ".prisma/client";
import { IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { CreateGameGenderDto } from "src/game-gender/dto/create-game-gender.dto";
import { CreateUserDto } from "src/users/dto/create-user.dto";
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
    users?:         CreateUserDto[];
    @IsInt()
    @IsOptional()
    gender?:        CreateGameGenderDto[];
}

import { CreateGameGenderDto } from "src/game-gender/dto/create-game-gender.dto";
import { CreateUserDto } from "src/users/dto/create-user.dto";
import { Game } from "../entities/game.entity";
export declare class CreateGameDto extends Game {
    title: string;
    folder: string;
    description: string;
    year: number;
    score: number;
    youtubeUrl?: string | null;
    gamePlayUrl?: string | null;
    users?: CreateUserDto[];
    gender?: CreateGameGenderDto[];
}

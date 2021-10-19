import { CreateGameGenreDto } from "src/game-genre/dto/create-game-genre.dto";
import { CreateListOfGameDto } from "src/list-of-games/dto/create-list-of-game.dto";
import { Game } from "../entities/game.entity";
export declare class CreateGameDto extends Game {
    title: string;
    folder: string;
    description: string;
    year: number;
    score: number;
    youtubeUrl?: string | null;
    gamePlayUrl?: string | null;
    users?: CreateListOfGameDto[] | null;
    genre?: CreateGameGenreDto[];
}

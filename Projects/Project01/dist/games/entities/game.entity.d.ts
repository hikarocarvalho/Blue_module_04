import { GameGenre } from "src/game-genre/entities/game-genre.entity";
import { User } from "src/users/entities/user.entity";
export declare class Game {
    id?: number;
    title: string;
    folder: string;
    description: string;
    year: number;
    score: number;
    youtubeUrl?: string | null;
    gamePlayUrl?: string | null;
    users?: User[];
    gender?: GameGenre[];
}

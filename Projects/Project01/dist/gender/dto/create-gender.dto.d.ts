import { Genre } from "../entities/gender.entity";
import { CreateGameGenreDto } from "src/game-gender/dto/create-game-genre.dto";
export declare class CreateGenreDto extends Genre {
    name: string;
    game?: CreateGameGenreDto[];
}

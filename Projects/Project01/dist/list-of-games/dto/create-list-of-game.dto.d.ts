import { ListOfGames } from "../entities/list-of-game.entity";
export declare class CreateListOfGameDto extends ListOfGames {
    userId: number | null;
    gameId: number | null;
}

import { Prisma } from ".prisma/client";
import { Game } from "../entities/game.entity";
export declare class CreateGameDto extends Game {
    title: string;
    folder: string;
    description: string;
    year: number;
    score: number;
    youtubeUrl?: string | null;
    gamePlayUrl?: string | null;
    users?: Prisma.ListOfGamesUncheckedCreateNestedManyWithoutGameInput;
    gender?: Prisma.GameGenderUncheckedCreateNestedManyWithoutGameInput;
}

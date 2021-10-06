import { Prisma } from ".prisma/client";
export declare class ListOfGames implements Prisma.ListOfGamesUncheckedCreateInput {
    id?: number;
    userId: number;
    gameId: number;
}

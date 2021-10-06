import { Prisma } from ".prisma/client";
export class ListOfGames implements Prisma.ListOfGamesUncheckedCreateInput {
    id?:         number; 
    userId:      number;
    gameId:      number;
}

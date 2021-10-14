import { Prisma } from ".prisma/client";

export class GameGenre{
    id?: number;
    gameId: number;
    genreId: number;
}

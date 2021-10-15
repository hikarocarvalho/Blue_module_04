import { GamesService } from './games.service';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
export declare class GamesController {
    private readonly gamesService;
    constructor(gamesService: GamesService);
    create(createGameDto: CreateGameDto): import(".prisma/client").Prisma.Prisma__GamesClient<import(".prisma/client").Games & {
        genre: {
            genre: import(".prisma/client").Genre;
        }[];
    }>;
    findAll(): import(".prisma/client").PrismaPromise<(import(".prisma/client").Games & {
        genre: {
            genre: import(".prisma/client").Genre;
        }[];
    })[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__GamesClient<import(".prisma/client").Games & {
        genre: {
            genre: import(".prisma/client").Genre;
        }[];
    }>;
    update(id: number, updateGameDto: UpdateGameDto): import(".prisma/client").Prisma.Prisma__GamesClient<import(".prisma/client").Games & {
        genre: {
            genre: import(".prisma/client").Genre;
        }[];
    }>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__GamesClient<import(".prisma/client").Games>;
}

import { GamesService } from './games.service';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
export declare class GamesController {
    private readonly gamesService;
    constructor(gamesService: GamesService);
    create(createGameDto: CreateGameDto): import(".prisma/client").Prisma.Prisma__GamesClient<import(".prisma/client").Games & {
        users: {
            user: import(".prisma/client").Users;
        }[];
        gender: {
            gender: import(".prisma/client").Gender;
        }[];
    }>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Games[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__GamesClient<import(".prisma/client").Games & {
        users: {
            user: import(".prisma/client").Users;
        }[];
        gender: {
            gender: import(".prisma/client").Gender;
        }[];
    }>;
    update(id: string, updateGameDto: UpdateGameDto): import(".prisma/client").Prisma.Prisma__GamesClient<import(".prisma/client").Games & {
        users: {
            user: import(".prisma/client").Users;
        }[];
        gender: {
            gender: import(".prisma/client").Gender;
        }[];
    }>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__GamesClient<import(".prisma/client").Games>;
}

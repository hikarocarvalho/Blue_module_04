import { GamesService } from './games.service';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
export declare class GamesController {
    private readonly gamesService;
    constructor(gamesService: GamesService);
    create(createGameDto: CreateGameDto): import(".prisma/client").Prisma.Prisma__GamesClient<import(".prisma/client").Games>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Games[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__GamesClient<import(".prisma/client").Games>;
    update(id: number, updateGameDto: UpdateGameDto): import(".prisma/client").Prisma.Prisma__GamesClient<import(".prisma/client").Games>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__GamesClient<import(".prisma/client").Games>;
}

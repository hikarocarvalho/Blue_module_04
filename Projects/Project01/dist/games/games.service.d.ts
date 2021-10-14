import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
export declare class GamesService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    private readonly _include;
    create(data: CreateGameDto): import(".prisma/client").Prisma.Prisma__GamesClient<import(".prisma/client").Games & {
        gender: {
            gender: import(".prisma/client").Gender;
        }[];
    }>;
    findAll(): import(".prisma/client").PrismaPromise<(import(".prisma/client").Games & {
        gender: {
            gender: import(".prisma/client").Gender;
        }[];
    })[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__GamesClient<import(".prisma/client").Games & {
        gender: {
            gender: import(".prisma/client").Gender;
        }[];
    }>;
    update(id: number, data: UpdateGameDto): import(".prisma/client").Prisma.Prisma__GamesClient<import(".prisma/client").Games & {
        gender: {
            gender: import(".prisma/client").Gender;
        }[];
    }>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__GamesClient<import(".prisma/client").Games>;
}

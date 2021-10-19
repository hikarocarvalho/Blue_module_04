import { Prisma } from '.prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
export declare class GamesService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    private readonly _include;
    create(dto: CreateGameDto): Prisma.Prisma__GamesClient<import(".prisma/client").Games & {
        genre: {
            genre: import(".prisma/client").Genre;
        }[];
    }>;
    findAll(): import(".prisma/client").PrismaPromise<(import(".prisma/client").Games & {
        genre: {
            genre: import(".prisma/client").Genre;
        }[];
    })[]>;
    findOne(id: number): Prisma.Prisma__GamesClient<import(".prisma/client").Games & {
        genre: {
            genre: import(".prisma/client").Genre;
        }[];
    }>;
    update(id: number, data: UpdateGameDto): Prisma.Prisma__GamesClient<import(".prisma/client").Games & {
        genre: {
            genre: import(".prisma/client").Genre;
        }[];
    }>;
    remove(id: number): Prisma.Prisma__GamesClient<import(".prisma/client").Games>;
}

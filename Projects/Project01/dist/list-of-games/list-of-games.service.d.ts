import { PrismaService } from 'src/prisma/prisma.service';
import { CreateListOfGameDto } from './dto/create-list-of-game.dto';
import { UpdateListOfGameDto } from './dto/update-list-of-game.dto';
export declare class ListOfGamesService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    private readonly _include;
    create(data: CreateListOfGameDto): import(".prisma/client").Prisma.Prisma__ListOfGamesClient<import(".prisma/client").ListOfGames>;
    findAll(id: number): import(".prisma/client").PrismaPromise<(import(".prisma/client").ListOfGames & {
        game: {
            title: string;
            id: number;
            genre: {
                genre: {
                    name: string;
                };
            }[];
            folder: string;
            description: string;
            year: number;
            score: number;
            youtubeUrl: string;
            gamePlayUrl: string;
        };
    })[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__ListOfGamesClient<import(".prisma/client").ListOfGames>;
    update(id: number, data: UpdateListOfGameDto): import(".prisma/client").Prisma.Prisma__ListOfGamesClient<import(".prisma/client").ListOfGames>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__ListOfGamesClient<import(".prisma/client").ListOfGames>;
}

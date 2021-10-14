import { ListOfGamesService } from './list-of-games.service';
import { CreateListOfGameDto } from './dto/create-list-of-game.dto';
import { UpdateListOfGameDto } from './dto/update-list-of-game.dto';
export declare class ListOfGamesController {
    private readonly listOfGamesService;
    constructor(listOfGamesService: ListOfGamesService);
    create(createListOfGameDto: CreateListOfGameDto): import(".prisma/client").Prisma.Prisma__ListOfGamesClient<import(".prisma/client").ListOfGames & {
        user: {
            name: string;
        };
        game: {
            id: number;
            title: string;
            folder: string;
            description: string;
            year: number;
            score: number;
            youtubeUrl: string;
            gamePlayUrl: string;
            genre: import(".prisma/client").GameGenre[];
        };
    }>;
    findAll(id: number): import(".prisma/client").PrismaPromise<(import(".prisma/client").ListOfGames & {
        user: {
            name: string;
        };
        game: {
            id: number;
            title: string;
            folder: string;
            description: string;
            year: number;
            score: number;
            youtubeUrl: string;
            gamePlayUrl: string;
            genre: import(".prisma/client").GameGenre[];
        };
    })[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__ListOfGamesClient<import(".prisma/client").ListOfGames>;
    update(id: number, updateListOfGameDto: UpdateListOfGameDto): import(".prisma/client").Prisma.Prisma__ListOfGamesClient<import(".prisma/client").ListOfGames>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__ListOfGamesClient<import(".prisma/client").ListOfGames>;
}

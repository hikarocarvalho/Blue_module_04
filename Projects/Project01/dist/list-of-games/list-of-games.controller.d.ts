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
            title: string;
            id: number;
            genre: import(".prisma/client").GameGenre[];
            folder: string;
            description: string;
            year: number;
            score: number;
            youtubeUrl: string;
            gamePlayUrl: string;
        };
    }>;
    findAll(id: number): import(".prisma/client").PrismaPromise<(import(".prisma/client").ListOfGames & {
        user: {
            name: string;
        };
        game: {
            title: string;
            id: number;
            genre: import(".prisma/client").GameGenre[];
            folder: string;
            description: string;
            year: number;
            score: number;
            youtubeUrl: string;
            gamePlayUrl: string;
        };
    })[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__ListOfGamesClient<import(".prisma/client").ListOfGames>;
    update(id: number, updateListOfGameDto: UpdateListOfGameDto): import(".prisma/client").Prisma.Prisma__ListOfGamesClient<import(".prisma/client").ListOfGames>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__ListOfGamesClient<import(".prisma/client").ListOfGames>;
}

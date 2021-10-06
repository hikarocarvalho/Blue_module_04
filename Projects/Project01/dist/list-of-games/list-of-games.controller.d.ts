import { ListOfGamesService } from './list-of-games.service';
import { CreateListOfGameDto } from './dto/create-list-of-game.dto';
import { UpdateListOfGameDto } from './dto/update-list-of-game.dto';
export declare class ListOfGamesController {
    private readonly listOfGamesService;
    constructor(listOfGamesService: ListOfGamesService);
    create(createListOfGameDto: CreateListOfGameDto): import(".prisma/client").Prisma.Prisma__ListOfGamesClient<import(".prisma/client").ListOfGames & {
        game: {
            title: string;
        };
        user: {
            name: string;
        };
    }>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").ListOfGames[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__ListOfGamesClient<import(".prisma/client").ListOfGames>;
    update(id: string, updateListOfGameDto: UpdateListOfGameDto): import(".prisma/client").Prisma.Prisma__ListOfGamesClient<import(".prisma/client").ListOfGames>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__ListOfGamesClient<import(".prisma/client").ListOfGames>;
}

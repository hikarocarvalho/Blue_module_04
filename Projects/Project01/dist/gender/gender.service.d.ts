import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGenreDto } from './dto/create-gender.dto';
import { UpdateGenderDto } from './dto/update-gender.dto';
export declare class GenderService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    private readonly _include;
    create(data: CreateGenreDto): import(".prisma/client").Prisma.Prisma__GenreClient<import(".prisma/client").Genre & {
        game: {
            game: import(".prisma/client").Games;
        }[];
    }>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Genre[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__GenreClient<import(".prisma/client").Genre & {
        game: {
            game: import(".prisma/client").Games;
        }[];
    }>;
    update(id: number, data: UpdateGenderDto): import(".prisma/client").Prisma.Prisma__GenreClient<import(".prisma/client").Genre & {
        game: {
            game: import(".prisma/client").Games;
        }[];
    }>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__GenreClient<import(".prisma/client").Genre>;
}

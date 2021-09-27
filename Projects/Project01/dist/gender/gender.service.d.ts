import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGenderDto } from './dto/create-gender.dto';
import { UpdateGenderDto } from './dto/update-gender.dto';
export declare class GenderService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    private readonly _include;
    create(data: CreateGenderDto): import(".prisma/client").Prisma.Prisma__GenderClient<import(".prisma/client").Gender & {
        game: {
            game: import(".prisma/client").Games;
        }[];
    }>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Gender[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__GenderClient<import(".prisma/client").Gender & {
        game: {
            game: import(".prisma/client").Games;
        }[];
    }>;
    update(id: number, data: UpdateGenderDto): import(".prisma/client").Prisma.Prisma__GenderClient<import(".prisma/client").Gender & {
        game: {
            game: import(".prisma/client").Games;
        }[];
    }>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__GenderClient<import(".prisma/client").Gender>;
}

import { GenderService } from './gender.service';
import { CreateGenderDto } from './dto/create-gender.dto';
import { UpdateGenderDto } from './dto/update-gender.dto';
export declare class GenderController {
    private readonly genderService;
    constructor(genderService: GenderService);
    create(createGenderDto: CreateGenderDto): import(".prisma/client").Prisma.Prisma__GenderClient<import(".prisma/client").Gender & {
        game: {
            game: import(".prisma/client").Games;
        }[];
    }>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Gender[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__GenderClient<import(".prisma/client").Gender & {
        game: {
            game: import(".prisma/client").Games;
        }[];
    }>;
    update(id: string, updateGenderDto: UpdateGenderDto): import(".prisma/client").Prisma.Prisma__GenderClient<import(".prisma/client").Gender & {
        game: {
            game: import(".prisma/client").Games;
        }[];
    }>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__GenderClient<import(".prisma/client").Gender>;
}

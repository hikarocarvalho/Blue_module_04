import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    private readonly _include;
    create(data: CreateUserDto): import(".prisma/client").Prisma.Prisma__UsersClient<import(".prisma/client").Users>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Users[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__UsersClient<import(".prisma/client").Users & {
        perfil: never;
        games: {
            game: import(".prisma/client").Games;
        }[];
    }>;
    update(id: number, data: UpdateUserDto): import(".prisma/client").Prisma.Prisma__UsersClient<import(".prisma/client").Users & {
        perfil: never;
        games: {
            game: import(".prisma/client").Games;
        }[];
    }>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__UsersClient<import(".prisma/client").Users>;
}

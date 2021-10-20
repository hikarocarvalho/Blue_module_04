import { Prisma } from '.prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    private readonly _include;
    create(dto: CreateUserDto): Promise<import(".prisma/client").Users>;
    findAll(): import(".prisma/client").PrismaPromise<(import(".prisma/client").Users & {
        games: {
            game: import(".prisma/client").Games;
        }[];
        Perfil: {
            title: string;
            image: string;
        }[];
    })[]>;
    findOne(id: number): Prisma.Prisma__UsersClient<import(".prisma/client").Users & {
        games: {
            game: import(".prisma/client").Games;
        }[];
        Perfil: {
            title: string;
            image: string;
        }[];
    }>;
    update(id: number, data: UpdateUserDto): Prisma.Prisma__UsersClient<import(".prisma/client").Users & {
        games: {
            game: import(".prisma/client").Games;
        }[];
        Perfil: {
            title: string;
            image: string;
        }[];
    }>;
    remove(id: number): Prisma.Prisma__UsersClient<import(".prisma/client").Users>;
}

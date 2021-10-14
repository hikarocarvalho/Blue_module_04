import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): import(".prisma/client").Prisma.Prisma__UsersClient<import(".prisma/client").Users>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Users[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__UsersClient<import(".prisma/client").Users & {
        games: {
            game: import(".prisma/client").Games;
        }[];
        perfil: never;
    }>;
    update(id: number, updateUserDto: UpdateUserDto): import(".prisma/client").Prisma.Prisma__UsersClient<import(".prisma/client").Users & {
        games: {
            game: import(".prisma/client").Games;
        }[];
        perfil: never;
    }>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__UsersClient<import(".prisma/client").Users>;
}

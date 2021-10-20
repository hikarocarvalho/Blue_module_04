import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): Promise<{
        password: any;
        id: number;
        name: string;
        lastName: string;
        email: string;
        CPF: string;
    }>;
    findAll(): string;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__UsersClient<import(".prisma/client").Users & {
        games: {
            game: import(".prisma/client").Games;
        }[];
        Perfil: {
            title: string;
            image: string;
        }[];
    }>;
    update(id: number, updateUserDto: UpdateUserDto): import(".prisma/client").Prisma.Prisma__UsersClient<import(".prisma/client").Users & {
        games: {
            game: import(".prisma/client").Games;
        }[];
        Perfil: {
            title: string;
            image: string;
        }[];
    }>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__UsersClient<import(".prisma/client").Users>;
}

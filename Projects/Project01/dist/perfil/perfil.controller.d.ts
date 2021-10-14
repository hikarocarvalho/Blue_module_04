import { PerfilService } from './perfil.service';
import { CreatePerfilDto } from './dto/create-perfil.dto';
import { UpdatePerfilDto } from './dto/update-perfil.dto';
export declare class PerfilController {
    private readonly perfilService;
    constructor(perfilService: PerfilService);
    create(createPerfilDto: CreatePerfilDto): import(".prisma/client").Prisma.Prisma__PerfilClient<import(".prisma/client").Perfil & {
        user: {
            name: string;
            lastName: string;
            email: string;
            password: string;
            CPF: string;
        };
    }>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Perfil[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__PerfilClient<import(".prisma/client").Perfil & {
        user: {
            name: string;
            lastName: string;
            email: string;
            password: string;
            CPF: string;
        };
    }>;
    update(id: number, updatePerfilDto: UpdatePerfilDto): import(".prisma/client").Prisma.Prisma__PerfilClient<import(".prisma/client").Perfil & {
        user: {
            name: string;
            lastName: string;
            email: string;
            password: string;
            CPF: string;
        };
    }>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__PerfilClient<import(".prisma/client").Perfil>;
}

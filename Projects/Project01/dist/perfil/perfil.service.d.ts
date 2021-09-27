import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePerfilDto } from './dto/create-perfil.dto';
import { UpdatePerfilDto } from './dto/update-perfil.dto';
export declare class PerfilService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    private readonly _include;
    create(data: CreatePerfilDto): import(".prisma/client").Prisma.Prisma__PerfilClient<import(".prisma/client").Perfil & {
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
    update(id: number, data: UpdatePerfilDto): import(".prisma/client").Prisma.Prisma__PerfilClient<import(".prisma/client").Perfil & {
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

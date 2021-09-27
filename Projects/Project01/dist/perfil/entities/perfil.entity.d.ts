import { Prisma } from ".prisma/client";
export declare class Perfil implements Prisma.PerfilUncheckedCreateInput {
    id?: number;
    title: string;
    image?: string | null;
    userId: number;
}

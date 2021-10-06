import { Prisma } from "@prisma/client";
export declare class User implements Prisma.UsersUncheckedCreateInput {
    id?: number;
    name: string;
    lastName: string;
    email: string;
    password: string;
    CPF: string;
    games?: Prisma.ListOfGamesUncheckedCreateNestedManyWithoutUserInput;
    Perfil?: Prisma.PerfilUncheckedCreateNestedManyWithoutUserInput;
}

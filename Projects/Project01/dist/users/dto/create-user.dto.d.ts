import { Prisma } from "@prisma/client";
import { User } from "../entities/user.entity";
export declare class CreateUserDto extends User {
    name: string;
    lastName: string;
    email: string;
    password: string;
    CPF: string;
    games?: Prisma.ListOfGamesUncheckedCreateNestedManyWithoutUserInput;
    Perfil?: Prisma.PerfilUncheckedCreateNestedManyWithoutUserInput;
}

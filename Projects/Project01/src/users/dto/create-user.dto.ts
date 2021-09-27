import { IsNotEmpty, IsOptional, IsString } from "class-validator";
import { Prisma } from "@prisma/client";
import { User } from "../entities/user.entity";
export class CreateUserDto extends User{
    @IsNotEmpty()
    @IsString()
    name:           string;
    @IsNotEmpty()
    @IsString()
    lastName:       string;
    @IsNotEmpty()
    @IsString()
    email:          string;
    @IsNotEmpty()
    @IsString()
    password:       string;
    @IsNotEmpty()
    @IsString()
    CPF:            string;
    @IsOptional()
    games?:         Prisma.ListOfGamesUncheckedCreateNestedManyWithoutUserInput;
    @IsOptional()
    Perfil?:        Prisma.PerfilUncheckedCreateNestedManyWithoutUserInput;
}

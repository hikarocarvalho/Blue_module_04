import { User } from "../entities/user.entity";
import { CreateListOfGameDto } from "src/list-of-games/dto/create-list-of-game.dto";
import { CreatePerfilDto } from "src/perfil/dto/create-perfil.dto";
export declare class CreateUserDto extends User {
    name: string;
    lastName: string;
    email: string;
    password: string;
    CPF: string;
    games?: CreateListOfGameDto[];
    perfil?: CreatePerfilDto[];
}

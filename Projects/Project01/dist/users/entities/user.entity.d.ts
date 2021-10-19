import { ListOfGames } from "src/list-of-games/entities/list-of-game.entity";
import { Perfil } from "src/perfil/entities/perfil.entity";
export declare class User {
    id?: number;
    name: string;
    lastName: string;
    email: string;
    password: string;
    CPF: string;
    games?: ListOfGames[];
    perfil?: Perfil[];
}

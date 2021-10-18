import { Perfil } from "../entities/perfil.entity";
export declare class CreatePerfilDto extends Perfil {
    title: string;
    image?: string | null;
    userId: number;
}

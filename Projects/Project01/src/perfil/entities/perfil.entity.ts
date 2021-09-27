import { Prisma } from ".prisma/client";

//import { Prisma } from "@prisma/client";
export class Perfil implements Prisma.PerfilUncheckedCreateInput{
    id?:        number;
    title:      string;
    image?:     string | null;
    userId:     number;
}

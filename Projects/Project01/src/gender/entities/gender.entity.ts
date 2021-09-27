import { Prisma } from "@prisma/client";

export class Gender implements Prisma.GenderUncheckedCreateInput{
    id?:        number;
    name:       string;
    game?:      Prisma.GameGenderCreateNestedManyWithoutGenderInput;
}

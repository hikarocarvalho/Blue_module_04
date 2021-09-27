import { Gender } from "../entities/gender.entity";
import { Prisma } from ".prisma/client";
export declare class CreateGenderDto extends Gender {
    name: string;
    game?: Prisma.GameGenderCreateNestedManyWithoutGenderInput;
}

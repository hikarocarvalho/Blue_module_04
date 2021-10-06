import { Gender } from "../entities/gender.entity";
import { Prisma } from ".prisma/client";
import { IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";
export class CreateGenderDto extends Gender{
    @IsString()
    @IsNotEmpty()
    name:     string;
    @IsInt()
    @IsOptional()
    game?:      Prisma.GameGenderCreateNestedManyWithoutGenderInput;
}

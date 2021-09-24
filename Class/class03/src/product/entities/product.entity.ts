import { Prisma } from "@prisma/client";
export class Product {
    id?: number;
    name: string;
    price?: number;
    images?: Prisma.ImageUncheckedCreateNestedManyWithoutProductInput;
}

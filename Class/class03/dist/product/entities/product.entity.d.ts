import { Prisma } from "@prisma/client";
export declare class Product {
    id?: number;
    name: string;
    price?: number;
    images?: Prisma.ImageUncheckedCreateNestedManyWithoutProductInput;
}

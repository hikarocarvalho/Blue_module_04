import { Prisma } from "@prisma/client";
export class Game implements Prisma.GamesUncheckedCreateInput{
    id?:            number;
    title:          string;
    folder:         string;
    description:    string;
    year:           number;
    score:          number;
    youtubeUrl?:    string | null;
    gamePlayUrl?:   string | null;
    users?:         Prisma.ListOfGamesUncheckedCreateNestedManyWithoutGameInput;
    gender?:        Prisma.GameGenderUncheckedCreateNestedManyWithoutGameInput;
}

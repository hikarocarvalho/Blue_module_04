import { GameGender } from "src/game-gender/entities/game-gender.entity";
import { User } from "src/users/entities/user.entity";
export class Game{
    id?:            number;
    title:          string;
    folder:         string;
    description:    string;
    year:           number;
    score:          number;
    youtubeUrl?:    string | null;
    gamePlayUrl?:   string | null;
    users?:         User[];
    gender?:        GameGender[];
}

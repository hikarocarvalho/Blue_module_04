import { Gender } from "../entities/gender.entity";
import { CreateGameGenderDto } from "src/game-gender/dto/create-game-gender.dto";
export declare class CreateGenderDto extends Gender {
    name: string;
    game?: CreateGameGenderDto[];
}

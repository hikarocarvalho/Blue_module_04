import { PartialType } from '@nestjs/mapped-types';
import { CreateGameGenderDto } from './create-game-gender.dto';

export class UpdateGameGenderDto extends PartialType(CreateGameGenderDto) {}

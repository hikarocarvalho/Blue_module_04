import { Injectable } from '@nestjs/common';
import { CreateGameGenderDto } from './dto/create-game-gender.dto';
import { UpdateGameGenderDto } from './dto/update-game-gender.dto';

@Injectable()
export class GameGenderService {
  create(createGameGenderDto: CreateGameGenderDto) {
    return 'This action adds a new gameGender';
  }

  findAll() {
    return `This action returns all gameGender`;
  }

  findOne(id: number) {
    return `This action returns a #${id} gameGender`;
  }

  update(id: number, updateGameGenderDto: UpdateGameGenderDto) {
    return `This action updates a #${id} gameGender`;
  }

  remove(id: number) {
    return `This action removes a #${id} gameGender`;
  }
}

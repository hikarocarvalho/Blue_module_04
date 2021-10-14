import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GameGenderService } from './game-gender.service';
import { CreateGameGenderDto } from './dto/create-game-gender.dto';
import { UpdateGameGenderDto } from './dto/update-game-gender.dto';

@Controller('game-gender')
export class GameGenderController {
  constructor(private readonly gameGenderService: GameGenderService) {}

  @Post()
  create(@Body() createGameGenderDto: CreateGameGenderDto) {
    return this.gameGenderService.create(createGameGenderDto);
  }

  @Get()
  findAll() {
    return this.gameGenderService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gameGenderService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGameGenderDto: UpdateGameGenderDto) {
    return this.gameGenderService.update(+id, updateGameGenderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gameGenderService.remove(+id);
  }
}

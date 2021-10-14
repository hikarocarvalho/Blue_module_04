import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GameGenreService } from './game-genre.service';
import { CreateGameGenreDto } from './dto/create-game-genre.dto';
import { UpdateGameGenreDto } from './dto/update-game-genre.dto';

@Controller('game-genre')
export class GameGenreController {
  constructor(private readonly gameGenreService: GameGenreService) {}

  @Post()
  create(@Body() createGameGenreDto: CreateGameGenreDto) {
    return this.gameGenreService.create(createGameGenreDto);
  }

  @Get()
  findAll() {
    return this.gameGenreService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.gameGenreService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateGameGenreDto: UpdateGameGenreDto) {
    return this.gameGenreService.update(id, updateGameGenreDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.gameGenreService.remove(id);
  }
}

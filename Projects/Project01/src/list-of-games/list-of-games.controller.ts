import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ListOfGamesService } from './list-of-games.service';
import { CreateListOfGameDto } from './dto/create-list-of-game.dto';
import { UpdateListOfGameDto } from './dto/update-list-of-game.dto';

@Controller('list-of-games')
export class ListOfGamesController {
  constructor(private readonly listOfGamesService: ListOfGamesService) {}

  @Post()
  create(@Body() createListOfGameDto: CreateListOfGameDto) {
    return this.listOfGamesService.create(createListOfGameDto);
  }

  @Get()
  findAll() {
    return this.listOfGamesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.listOfGamesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateListOfGameDto: UpdateListOfGameDto) {
    return this.listOfGamesService.update(+id, updateListOfGameDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.listOfGamesService.remove(+id);
  }
}

import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateListOfGameDto } from './dto/create-list-of-game.dto';
import { UpdateListOfGameDto } from './dto/update-list-of-game.dto';

@Injectable()
export class ListOfGamesService {
  constructor(private readonly prisma:PrismaService){}
  private readonly _include={
    user:{
      select:{
        name: true,
        lastName: true,
        email: true,
        password: true,
        CPF: true,
      }
    },
    game:{
      select:{
        title: true,
        folder: true,
        description: true,
        year: true,
        score: true,
        youtubeUrl: true,
        gamePlayUrl: true,
        gender: true,
      }
    }
  }
  create(createListOfGameDto: CreateListOfGameDto) {
    return this.prisma.listOfGames.create({
      createListOfGameDto,
      include: this._include
    });
  }

  findAll() {
    return this.prisma.listOfGames.findMany();
  }

  findOne(id: number) {
    return this.prisma.listOfGames.findUnique({
      where:    {id},
    });
  }

  update(id: number, updateListOfGameDto: UpdateListOfGameDto) {
    return this.prisma.listOfGames.update({
      where:    {id},
      updateListOfGameDto,
    });
  }

  remove(id: number) {
    return this.prisma.listOfGames.delete({
      where:    {id},
    });
  }
}

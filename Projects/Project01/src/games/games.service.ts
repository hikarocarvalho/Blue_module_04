import { Prisma } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';

@Injectable()
export class GamesService {
  constructor (private readonly prisma:PrismaService){}
  private readonly _include={
    genre:{
      select:{
        genre:true,
      }
    }
  };
  create(dto: CreateGameDto) {
    const data: Prisma.GamesCreateInput = {
      ...dto,
      users:{
        create: dto.users,
      },
      genre:{
        create:dto.genre
      }
    }
    return this.prisma.games.create({
      include: this._include,
      data,
    });
  }

  findAll() {
    return this.prisma.games.findMany({
      include: this._include
    });
  }

  findOne(id: number) {
    return this.prisma.games.findUnique({
      where:    {id},
      include:  this._include,
    });
  }

  update(id: number, data: UpdateGameDto) {
    return this.prisma.games.update({
      where:      {id},
      data,
      include:    this._include,
    });
  }

  remove(id: number) {
    return this.prisma.games.delete({
      where:    {id},
    });
  }
}

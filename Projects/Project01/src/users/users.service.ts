import { Prisma } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor (private readonly prisma:PrismaService){}
  private readonly _include={
    games:{
      select:{
        game:true
      }
    },
    perfil:{
      select:{
        title:true,
        image:true,
      }
    },

  };
  create(dto: CreateUserDto) {
    const data : Prisma.UsersCreateInput = {
      ...dto,
      games:{
        create : dto.games
      },
      Perfil:{
        create : dto.perfil
      }
    }
    return this.prisma.users.create({
      data,
      include:this._include
    });
  }

  findAll() {
    return this.prisma.users.findMany();
  }

  findOne(id: number) {
    return this.prisma.users.findUnique({
      where:    {id},
      include:  this._include
    });
  }

  update(id: number, data: UpdateUserDto) {
    return this.prisma.users.update({
      where:    {id},
      data,
      include:this._include
    });
  }

  remove(id: number) {
    return this.prisma.users.delete({
      where:    {id},
    });
  }
}

import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGenderDto } from './dto/create-gender.dto';
import { UpdateGenderDto } from './dto/update-gender.dto';

@Injectable()
export class GenderService {
  constructor (private readonly prisma:PrismaService){}
  private readonly _include={
    game:{
      select:{
        game:true,
      }
    }
  };
  create(data: CreateGenderDto) {
    return this.prisma.gender.create({
      include: this._include,
      data,
    });
  }

  findAll() {
    return this.prisma.gender.findMany();
  }

  findOne(id: number) {
    return this.prisma.gender.findUnique({
      where:    {id},
      include:  this._include,
    });
  }

  update(id: number, data: UpdateGenderDto) {
    return this.prisma.gender.update({
      where:    {id},
      data,
      include:  this._include,
    });
  }

  remove(id: number) {
    return this.prisma.gender.delete({
      where:  {id},
    });
  }
}

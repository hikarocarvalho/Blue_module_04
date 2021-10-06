import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';


@Injectable()
export class ProductService {
  constructor (private readonly prisma:PrismaService){}

  private readonly _include ={
    images:{
      select:{
        url:true
      }
    },
  };
  create(data: CreateProductDto) {
    return this.prisma.product.create({
      data,
      include:this._include,
    });
  }

  findAll() {
    return this.prisma.product.findMany();
  }

  findOne(id: number) {
    return this.prisma.product.findUnique(
      {
        where: {id},
        include: this._include,
      }
    )
  }

  update(id: number, data: UpdateProductDto) {
    return this.prisma.product.update({
      where:{id},
      data,
      include: this._include,
    });
  }

  remove(id: number) {
    return this.prisma.product.delete({
      where:{id},
    });
  }
}

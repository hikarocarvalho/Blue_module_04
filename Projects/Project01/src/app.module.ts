import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { GamesModule } from './games/games.module';
import { PrismaService } from './prisma/prisma.service';
import { PerfilModule } from './perfil/perfil.module';
import { GenderModule } from './gender/gender.module';
import { ListOfGamesModule } from './list-of-games/list-of-games.module';
import { GameGenderModule } from './game-gender/game-gender.module';

@Module({
  imports: [UsersModule, GamesModule, PerfilModule, GenderModule, ListOfGamesModule, GameGenderModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}

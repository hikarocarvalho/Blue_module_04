import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { GamesModule } from './games/games.module';
import { PrismaService } from './prisma/prisma.service';
import { PerfilModule } from './perfil/perfil.module';
import { GenreModule } from './gender/genre.module';
import { ListOfGamesModule } from './list-of-games/list-of-games.module';
import { GameGenreModule } from './game-genre/game-genre.module';

@Module({
  imports: [UsersModule, GamesModule, PerfilModule, GenreModule, ListOfGamesModule, GameGenreModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}

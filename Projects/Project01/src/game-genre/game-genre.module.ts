import { Module } from '@nestjs/common';
import { GameGenreService } from './game-genre.service';
import { GameGenreController } from './game-genre.controller';

@Module({
  controllers: [GameGenreController],
  providers: [GameGenreService]
})
export class GameGenreModule {}

import { Module } from '@nestjs/common';
import { ListOfGamesService } from './list-of-games.service';
import { ListOfGamesController } from './list-of-games.controller';

@Module({
  controllers: [ListOfGamesController],
  providers: [ListOfGamesService]
})
export class ListOfGamesModule {}

import { Module } from '@nestjs/common';
import { GameGenderService } from './game-gender.service';
import { GameGenderController } from './game-gender.controller';

@Module({
  controllers: [GameGenderController],
  providers: [GameGenderService]
})
export class GameGenderModule {}

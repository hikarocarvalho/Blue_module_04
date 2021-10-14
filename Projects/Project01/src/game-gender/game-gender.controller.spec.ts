import { Test, TestingModule } from '@nestjs/testing';
import { GameGenderController } from './game-gender.controller';
import { GameGenderService } from './game-gender.service';

describe('GameGenderController', () => {
  let controller: GameGenderController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GameGenderController],
      providers: [GameGenderService],
    }).compile();

    controller = module.get<GameGenderController>(GameGenderController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

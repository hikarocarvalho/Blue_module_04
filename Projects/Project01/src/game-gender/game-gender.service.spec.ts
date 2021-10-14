import { Test, TestingModule } from '@nestjs/testing';
import { GameGenderService } from './game-gender.service';

describe('GameGenderService', () => {
  let service: GameGenderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GameGenderService],
    }).compile();

    service = module.get<GameGenderService>(GameGenderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

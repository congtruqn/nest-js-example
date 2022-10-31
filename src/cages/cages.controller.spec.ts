import { Test, TestingModule } from '@nestjs/testing';
import { CagesController } from './cages.controller';
import { CagesService } from './cages.service';

describe('CagesController', () => {
  let controller: CagesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CagesController],
      providers: [CagesService],
    }).compile();

    controller = module.get<CagesController>(CagesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

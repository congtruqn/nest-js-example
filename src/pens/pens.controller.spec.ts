import { Test, TestingModule } from '@nestjs/testing';
import { PensController } from './pens.controller';
import { PensService } from './pens.service';

describe('PensController', () => {
  let controller: PensController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PensController],
      providers: [PensService],
    }).compile();

    controller = module.get<PensController>(PensController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

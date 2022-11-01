import { Test, TestingModule } from '@nestjs/testing';
import { PensService } from './pens.service';

describe('PensService', () => {
  let service: PensService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PensService],
    }).compile();

    service = module.get<PensService>(PensService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

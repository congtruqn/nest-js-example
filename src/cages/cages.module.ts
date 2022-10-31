import { Module } from '@nestjs/common';
import { CagesService } from './cages.service';
import { CagesController } from './cages.controller';

@Module({
  controllers: [CagesController],
  providers: [CagesService]
})
export class CagesModule {}

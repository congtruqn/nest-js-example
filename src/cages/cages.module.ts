import { Module } from '@nestjs/common';
import { CagesService } from './cages.service';
import { CagesController } from './cages.controller';
import { PaginationModule } from '../utils/pagination/pagination.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CagesModel } from '../model/cages.entity';
@Module({
  imports: [TypeOrmModule.forFeature([CagesModel]),PaginationModule],
  controllers: [CagesController],
  providers: [CagesService],
  exports: [CagesService]
})
export class CagesModule {}

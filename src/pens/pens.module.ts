import { Module } from '@nestjs/common';
import { PensService } from './pens.service';
import { PensController } from './pens.controller';
import { PaginationModule } from '../utils/pagination/pagination.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PensModel } from '../model/pens.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PensModel]),PaginationModule],
  controllers: [PensController],
  providers: [PensService]
})
export class PensModule {}

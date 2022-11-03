import { Module } from '@nestjs/common';
import { ParnsService } from './parns.service';
import { CagesModule } from '../cages/cages.module';
import { ParnsController } from './parns.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ParnsModel } from '../model/parns.entity';
import { PaginationModule } from '../utils/pagination/pagination.module';
@Module({
  imports: [TypeOrmModule.forFeature([ParnsModel]),PaginationModule,CagesModule],
  controllers: [ParnsController],
  providers: [ParnsService]
})
export class ParnsModule {}

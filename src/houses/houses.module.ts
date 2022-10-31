import { Module } from '@nestjs/common';
import { HousesService } from './houses.service';
import { HousesController } from './houses.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HousesModel } from '../model/houses.entity';
import { PaginationModule } from '../utils/pagination/pagination.module';
@Module({
  imports: [TypeOrmModule.forFeature([HousesModel]),PaginationModule],
  controllers: [HousesController],
  providers: [HousesService]
})
export class HousesModule {}

import { Module } from '@nestjs/common';
import { AnimalsService } from './animals.service';
import { AnimalTypesService } from './animal.types.service';
import { AnimalsController } from './animals.controller';
import { AnimalTypesController } from './animal.types.controller';
import { AnimalTypesModel } from '../model/animal.type.entity';
import { AnimalsModel } from '../model/animal.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([AnimalTypesModel]),TypeOrmModule.forFeature([AnimalsModel])],
  controllers: [AnimalsController,AnimalTypesController],
  providers: [AnimalsService,AnimalTypesService]
})
export class AnimalsModule {}

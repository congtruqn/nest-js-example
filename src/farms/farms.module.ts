import { Module } from '@nestjs/common';
import { FarmsService } from './farms.service';
import { FarmsModel } from '../model/farms.entity';
import { FarmsController } from './farms.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [TypeOrmModule.forFeature([FarmsModel])],
  controllers: [FarmsController],
  providers: [FarmsService]
})
export class FarmsModule {}

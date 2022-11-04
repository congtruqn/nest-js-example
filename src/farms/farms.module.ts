import { Module } from '@nestjs/common';
import { FarmsService } from './farms.service';
import { FarmsModel } from '../model/farms.entity';
import { FarmsController } from './farms.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaginationModule } from '../utils/pagination/pagination.module';
import { UploadFileModule } from '../utils/uploadfile/uoloadfile.module';
@Module({
  imports: [TypeOrmModule.forFeature([FarmsModel]),PaginationModule,UploadFileModule],
  controllers: [FarmsController],
  providers: [FarmsService]
})
export class FarmsModule {}

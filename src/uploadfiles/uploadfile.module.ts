import { Module } from '@nestjs/common';
import { UploadfilesController } from './uploadfiles.controller';
import { UploadFileModule } from '../utils/uploadfile/uoloadfile.module';
@Module({
  imports: [UploadFileModule],
  controllers: [UploadfilesController],
  providers: []
})
export class UploadModule {}

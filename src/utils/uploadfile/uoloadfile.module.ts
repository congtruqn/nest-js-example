import { Module } from '@nestjs/common';
import { UploadFileService } from './services/uploadfile.service';

@Module({
  providers: [UploadFileService],
  exports: [UploadFileService],
})
export class UploadFileModule {}

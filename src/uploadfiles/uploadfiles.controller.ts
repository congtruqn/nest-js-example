import { Body, Controller, Delete, Post, Req, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { Any } from 'typeorm';
import { UploadFileService } from '../utils/uploadfile/services/uploadfile.service';
@ApiTags('Uploads')
@Controller('uploadfiles')

export class UploadfilesController {
    constructor(private readonly uploadFileService: UploadFileService) {}
    @Post('')
    @ApiConsumes('multipart/form-data')
    @ApiBody({
        schema: {
        type: 'object',
        properties: {
            file: {
                type: 'string',
                format: 'binary',
            },
        },
        },
    })
    @UseInterceptors(FileInterceptor('file'))
    uploadFile(@UploadedFile() file) {
      this.uploadFileService.upload(file.buffer,'avata',file.originalname);
    }
    @Delete('')
    @ApiBody({
        schema: {
        type: 'object',
        properties: {
                file_path: { type: 'string' },
            },
        },
    })
    deleteFile(@Req() request:any) {
      this.uploadFileService.remove(request.body.file_path);
    }
}

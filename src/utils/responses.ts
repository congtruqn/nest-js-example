import { HttpCode } from '@nestjs/common';
import { Exclude } from 'class-transformer';

export class ResponseEntity {
    
    statusCode: number;
    message: string ;
    data: {};

    error: [string]
  
    constructor(partial: Partial<ResponseEntity>) {
      Object.assign(this, partial);
    }
}
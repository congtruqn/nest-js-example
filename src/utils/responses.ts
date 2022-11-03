import { Exclude } from 'class-transformer';

export class ResponseEntity {
    statusCode: number;
    message: string ;
    data: {};

    error: []
  
    constructor(partial: Partial<ResponseEntity>) {
      Object.assign(this, partial);
    }
}
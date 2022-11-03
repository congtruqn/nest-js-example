import { Exclude } from 'class-transformer';

export class ResponseEntity {
    statusCode: number;
    message: [] ;
    data: {};
  
  
    constructor(partial: Partial<ResponseEntity>) {
      Object.assign(this, partial);
    }
}
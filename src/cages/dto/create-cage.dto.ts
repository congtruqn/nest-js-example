import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUUID } from 'class-validator';
export class CreateCageDto {

    @ApiProperty()
    @IsNotEmpty()
    name: string;
  
    @ApiProperty()
    @IsNotEmpty()
    @IsUUID()
    house_id: string;
}

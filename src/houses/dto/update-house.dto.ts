import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsUUID } from 'class-validator';
import { CreateHouseDto } from './create-house.dto';

export class UpdateHouseDto {
    @ApiProperty()
    @IsNotEmpty()
    name: string;
  
    @ApiProperty()
    @IsNotEmpty()
    @IsUUID()
    farm_id: string;
}

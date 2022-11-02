import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty,IsDateString } from 'class-validator';
export class CreateFarmDto {
    @ApiProperty()
    @IsNotEmpty()
    name: string;
  
    @ApiProperty()
    @IsNotEmpty()
    farm_code: string;
  
    @ApiProperty()
    @IsDateString()
    start_date: string;
  
    @ApiProperty()
    @IsNotEmpty()
    region: string;

    @ApiProperty()
    @IsNotEmpty()
    address: string;

    @ApiProperty()
    @IsNotEmpty()
    acreage: number;

    @ApiProperty()
    @IsNotEmpty()
    farm_type: number;

    @ApiProperty()
    @IsNotEmpty()
    farm_size: number;

    @ApiProperty()
    @IsNotEmpty()
    contact_persion: string;

    @ApiProperty()
    @IsNotEmpty()
    contact_phone:string
    
    @ApiProperty()
    @IsNotEmpty()
    business_unit:number

    @ApiProperty()
    @IsNotEmpty()
    longitude:number
    
    @ApiProperty()
    @IsNotEmpty()
    latitude:number    
    
}

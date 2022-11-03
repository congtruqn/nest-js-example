import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class HousefilterDto {

  @ApiPropertyOptional()
  @IsOptional()
  farm_id: string;
}

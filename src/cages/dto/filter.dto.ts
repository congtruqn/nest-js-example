import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class CagefilterDto {

  @ApiPropertyOptional()
  @IsOptional()
  house_id: string;

  @ApiPropertyOptional()
  @IsOptional()
  farm_id: string;
}

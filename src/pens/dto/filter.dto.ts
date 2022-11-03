import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class PenfilterDto {
  @ApiPropertyOptional()
  @IsOptional()
  cage_id: string;

  @ApiPropertyOptional()
  @IsOptional()
  parn_id: string;

  @ApiPropertyOptional()
  @IsOptional()
  farm_id: string;
}

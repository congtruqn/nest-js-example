import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class PaginationDto {
  @ApiPropertyOptional()
  @IsOptional()
  skip: number;

  @ApiPropertyOptional()
  @IsOptional()
  limit: number;
}

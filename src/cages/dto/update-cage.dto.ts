import { PartialType } from '@nestjs/mapped-types';
import { CreateCageDto } from './create-cage.dto';

export class UpdateCageDto extends PartialType(CreateCageDto) {}

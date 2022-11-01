import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CagesService } from './cages.service';
import { CreateCageDto } from './dto/create-cage.dto';
import { UpdateCageDto } from './dto/update-cage.dto';
import { PaginationDto } from '../utils/pagination/interfaces/pagination.dto';
import { isUUID } from 'class-validator';

@ApiTags('Cages')
@Controller('cages')
export class CagesController {
  constructor(private readonly cagesService: CagesService) {}

  @Post()
  create(@Body() createCageDto: CreateCageDto) {
    return this.cagesService.create(createCageDto);
  }

  @Get('house/:house_id')
  findAll(@Param('house_id') house_id: string,@Query() filterPaginationDto: PaginationDto) {
    return this.cagesService.findAll(house_id,filterPaginationDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    if(id && !isUUID(id)) throw new Error(`Invalid id, UUID format expected but received ${id}`);
    return this.cagesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCageDto: UpdateCageDto) {
    if(id && !isUUID(id)) throw new Error(`Invalid id, UUID format expected but received ${id}`);
    return this.cagesService.update(id, updateCageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    if(id && !isUUID(id)) throw new Error(`Invalid id, UUID format expected but received ${id}`);
    return this.cagesService.remove(+id);
  }
}

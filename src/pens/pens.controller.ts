import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { PensService } from './pens.service';
import { CreatePenDto } from './dto/create-pen.dto';
import { UpdatePenDto } from './dto/update-pen.dto';
import { ApiTags } from '@nestjs/swagger';
import { PaginationDto } from '../utils/pagination/interfaces/pagination.dto';
import { isUUID } from 'class-validator';

@ApiTags('Pens')
@Controller('pens')
export class PensController {
  constructor(private readonly pensService: PensService) {}

  @Post()
  create(@Body() createPenDto: CreatePenDto) {
    return this.pensService.create(createPenDto);
  }

  @Get()
  findAll(@Param('cage_id') cage_id: string,@Query() filterPaginationDto: PaginationDto,@Query() fillter:any ) {
    if(cage_id && !isUUID(cage_id)) throw new Error(`Invalid id, UUID format expected but received ${cage_id}`);
    return this.pensService.findAll(cage_id,filterPaginationDto,fillter);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    if(id && !isUUID(id)) throw new Error(`Invalid id, UUID format expected but received ${id}`);
    return this.pensService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePenDto: UpdatePenDto) {
    if(id && !isUUID(id)) throw new Error(`Invalid id, UUID format expected but received ${id}`);
    return this.pensService.update(id, updatePenDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    if(id && !isUUID(id)) throw new Error(`Invalid id, UUID format expected but received ${id}`);
    return this.pensService.remove(id);
  }
}

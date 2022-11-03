import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { PensService } from './pens.service';
import { CreatePenDto } from './dto/create-pen.dto';
import { UpdatePenDto } from './dto/update-pen.dto';
import { PenfilterDto } from './dto/filter.dto';
import { ApiTags } from '@nestjs/swagger';
import { PaginationDto } from '../utils/pagination/interfaces/pagination.dto';
import { isUUID } from 'class-validator';
import { ResponseEntity } from '../utils/responses';
@ApiTags('Pens')
@Controller('pens')
export class PensController {
  constructor(private readonly pensService: PensService) {}

  @Post()
  async create(@Body() createPenDto: CreatePenDto) {
    let pen = await this.pensService.create(createPenDto);
    return new ResponseEntity({
      statusCode: 201,
      message: "",
      data: {pen},
    });
  }

  @Get()
  async findAll(@Query() filterPaginationDto: PaginationDto,@Query() penfilterDto:PenfilterDto) {
    console.time('test');
    let listPens = await this.pensService.findAll(filterPaginationDto,penfilterDto);
    console.timeEnd('test');
    return new ResponseEntity({
      statusCode: 200,
      message: "",
      data: {...listPens},
    });
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    if(id && !isUUID(id)) throw new Error(`Invalid id, UUID format expected but received ${id}`);
    let pen = await this.pensService.findOne(id);
    return new ResponseEntity({
      statusCode: 200,
      message: "",
      data: {pen},
    });
  }

  @Patch(':id')
  async asyncupdate(@Param('id') id: string, @Body() updatePenDto: UpdatePenDto) {
    if(id && !isUUID(id)) throw new Error(`Invalid id, UUID format expected but received ${id}`);
    let pen = await this.pensService.update(id, updatePenDto);
    return new ResponseEntity({
      statusCode: 200,
      message: "",
      data: {pen},
    });
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    if(id && !isUUID(id)) throw new Error(`Invalid id, UUID format expected but received ${id}`);
    await this.pensService.remove(id);
    return new ResponseEntity({
      statusCode: 200,
      message: "",
      data: {},
    });
  }
}

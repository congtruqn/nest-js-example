import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { FarmsService } from './farms.service';
import { CreateFarmDto } from './dto/create-farm.dto';
import { UpdateFarmDto } from './dto/update-farm.dto';
import { ApiTags } from '@nestjs/swagger';
import { isUUID } from 'class-validator';
import { PaginationDto } from '../utils/pagination/interfaces/pagination.dto';
import { ResponseEntity } from '../utils/responses';

@ApiTags('Farms')
@Controller('farms')
export class FarmsController {
  constructor(private readonly farmsService: FarmsService) {}

  @Post()
  async create(@Body() createFarmDto: CreateFarmDto) {
    let farm =  await this.farmsService.create(createFarmDto);
    return new ResponseEntity({
      statusCode: 201,
      message: "",
      data: {farm},
    });
  }

  @Get()
  async findAll(@Query() filterPaginationDto: PaginationDto) {
    let listFarms = await this.farmsService.findAll(filterPaginationDto);
    return new ResponseEntity({
      statusCode: 200,
      message: "",
      data: {...listFarms},
    });
  }
  @Get(':id')
  async findOne(@Param('id') id: string) {
    if(id && !isUUID(id)) throw new Error(`Invalid id, UUID format expected but received ${id}`);
    let farm =  await this.farmsService.findOne(id);
    return new ResponseEntity({
      statusCode: 200,
      message: "",
      data: {farm},
    });
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateFarmDto: UpdateFarmDto) {
    let farm =  await this.farmsService.update(id, updateFarmDto);
    return new ResponseEntity({
      statusCode: 200,
      message: "",
      data: {farm},
    })
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    if(id && !isUUID(id)) throw new Error(`Invalid id, UUID format expected but received ${id}`);
    await this.farmsService.remove(id);
    return new ResponseEntity({
      statusCode: 200,
      message: "",
      data: {},
    })
  }
}

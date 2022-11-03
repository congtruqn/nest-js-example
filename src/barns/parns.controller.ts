import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ParnsService } from './parns.service';
import { CreateParnDto } from './dto/create-parn.dto';
import { UpdateParnDto } from './dto/update-parn.dto';
import { HousefilterDto } from './dto/filter.dto';
import { ApiTags } from '@nestjs/swagger';
import { isUUID } from 'class-validator';
import { PaginationDto } from '../utils/pagination/interfaces/pagination.dto';
import { ResponseEntity } from '../utils/responses';

@ApiTags('Parns')
@Controller('parns')
export class ParnsController {
  constructor(private readonly parnsService: ParnsService) {}

  @Post()
  async create(@Body() createHouseDto: CreateParnDto) {
    let house = await this.parnsService.create(createHouseDto);
    return new ResponseEntity({
      statusCode: 201,
      message: "",
      data: {house},
    });
  }

  @Get()
  async findAll(@Query() filterPaginationDto: PaginationDto,@Query() housefilterDto: HousefilterDto) {
    let listHouses = await this.parnsService.findAll(filterPaginationDto,housefilterDto);
    return new ResponseEntity({
      statusCode: 200,
      message: "",
      data: {...listHouses},
    });
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    if(id && !isUUID(id)) throw new Error(`Invalid id, UUID format expected but received ${id}`);
    let  house = await this.parnsService.findOne(id);
    return new ResponseEntity({
      statusCode: 200,
      message: "",
      data: {house},
    });
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateHouseDto: UpdateParnDto) {
    let house = await this.parnsService.update(id, updateHouseDto);
    return new ResponseEntity({
      statusCode: 200,
      message: "",
      data: {house},
    });
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    if(id && !isUUID(id)) throw new Error(`Invalid id, UUID format expected but received ${id}`);
    await this.parnsService.remove(id);
    return new ResponseEntity({
      statusCode: 200,
      message: "",
      data: {},
    });
  }
}

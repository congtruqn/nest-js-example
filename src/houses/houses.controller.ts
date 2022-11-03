import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { HousesService } from './houses.service';
import { CreateHouseDto } from './dto/create-house.dto';
import { UpdateHouseDto } from './dto/update-house.dto';
import { HousefilterDto } from './dto/filter.dto';
import { ApiTags } from '@nestjs/swagger';
import { isUUID } from 'class-validator';
import { PaginationDto } from '../utils/pagination/interfaces/pagination.dto';
import { ResponseEntity } from '../utils/responses';

@ApiTags('Houses')
@Controller('houses')
export class HousesController {
  constructor(private readonly housesService: HousesService) {}

  @Post()
  async create(@Body() createHouseDto: CreateHouseDto) {
    let house = await this.housesService.create(createHouseDto);
    return new ResponseEntity({
      statusCode: 201,
      message: "",
      data: {house},
    });
  }

  @Get()
  async findAll(@Query() filterPaginationDto: PaginationDto,@Query() housefilterDto: HousefilterDto) {
    let listHouses = await this.housesService.findAll(filterPaginationDto,housefilterDto);
    return new ResponseEntity({
      statusCode: 200,
      message: "",
      data: {...listHouses},
    });
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    if(id && !isUUID(id)) throw new Error(`Invalid id, UUID format expected but received ${id}`);
    let  house = await this.housesService.findOne(id);
    return new ResponseEntity({
      statusCode: 200,
      message: "",
      data: {house},
    });
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateHouseDto: UpdateHouseDto) {
    let house = await this.housesService.update(id, updateHouseDto);
    return new ResponseEntity({
      statusCode: 200,
      message: "",
      data: {house},
    });
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    if(id && !isUUID(id)) throw new Error(`Invalid id, UUID format expected but received ${id}`);
    await this.housesService.remove(id);
    return new ResponseEntity({
      statusCode: 200,
      message: "",
      data: {},
    });
  }
}

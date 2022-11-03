import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Injectable } from '@nestjs/common';
import { ParnsService } from './parns.service';
import { CagesService } from '../cages/cages.service';
import { CreateParnDto } from './dto/create-parn.dto';
import { UpdateParnDto } from './dto/update-parn.dto';
import { HousefilterDto } from './dto/filter.dto';
import { ApiTags } from '@nestjs/swagger';
import { isUUID } from 'class-validator';
import { PaginationDto } from '../utils/pagination/interfaces/pagination.dto';
import { ResponseEntity } from '../utils/responses';
import { Response } from 'express';
@ApiTags('Parns')
@Controller('parns')
export class ParnsController {
  constructor(
    private readonly parnsService: ParnsService,
    private readonly cagesService: CagesService
    ) {}

  @Post()
  async create(@Body() createHouseDto: CreateParnDto) {
    let barn = await this.parnsService.create(createHouseDto);
    return new ResponseEntity({
      statusCode: 201,
      message: "",
      data: {barn},
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
    let  barn = await this.parnsService.findOne(id);
    return new ResponseEntity({
      statusCode: 200,
      message: "",
      data: {barn},
    });
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateHouseDto: UpdateParnDto) {
    let barn = await this.parnsService.update(id, updateHouseDto);
    return new ResponseEntity({
      statusCode: 200,
      message: "",
      data: {barn},
    });
  }

  @Delete(':id')
  async remove(@Param('id') id: string,response: Response) {
    if(id && !isUUID(id)) throw new Error(`Invalid id, UUID format expected but received ${id}`);
    const test = await this.cagesService.findAll({},{parn_id:id})
    if(test&&test.results&&test.results.length>0){
      return new ResponseEntity({
        statusCode: 500,
        message: "",
        error: [
          "Please delete all of Cages that this Parn contains",
        ],
      });
    }
    await this.parnsService.remove(id);
    return new ResponseEntity({
      statusCode: 200,
      message: "",
      data: {},
    });
  }
}

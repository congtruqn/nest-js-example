import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HousesService } from './houses.service';
import { CreateHouseDto } from './dto/create-house.dto';
import { UpdateHouseDto } from './dto/update-house.dto';
import { ApiTags } from '@nestjs/swagger';
import { isUUID } from 'class-validator';

@ApiTags('Houses')
@Controller('houses')
export class HousesController {
  constructor(private readonly housesService: HousesService) {}

  @Post()
  create(@Body() createHouseDto: CreateHouseDto) {
    return this.housesService.create(createHouseDto);
  }

  @Get('farm/:farm_id')
  findAll(@Param('farm_id') farm_id: string) {
    if(farm_id && !isUUID(farm_id)) throw new Error(`Invalid id, UUID format expected but received ${farm_id}`);
    return this.housesService.findAll(farm_id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    if(id && !isUUID(id)) throw new Error(`Invalid id, UUID format expected but received ${id}`);
    return this.housesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHouseDto: UpdateHouseDto) {
    return this.housesService.update(+id, updateHouseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.housesService.remove(+id);
  }
}

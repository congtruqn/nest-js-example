import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CagesService } from './cages.service';
import { CreateCageDto } from './dto/create-cage.dto';
import { UpdateCageDto } from './dto/update-cage.dto';

@Controller('cages')
export class CagesController {
  constructor(private readonly cagesService: CagesService) {}

  @Post()
  create(@Body() createCageDto: CreateCageDto) {
    return this.cagesService.create(createCageDto);
  }

  @Get()
  findAll() {
    return this.cagesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cagesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCageDto: UpdateCageDto) {
    return this.cagesService.update(+id, updateCageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cagesService.remove(+id);
  }
}

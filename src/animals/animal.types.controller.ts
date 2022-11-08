import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AnimalTypesService } from './animal.types.service';
import { ResponseEntity } from '../utils/responses';

@ApiTags('Animal Types')
@Controller('animaltypes')
export class AnimalTypesController {
  constructor(private readonly animalsService: AnimalTypesService) {}
  @Get()
  async findAll() {
    const animaltype = await this.animalsService.findAll();
    return new ResponseEntity({
      statusCode: 200,
      message: "",
      data: {animaltype},
    });
  }
}

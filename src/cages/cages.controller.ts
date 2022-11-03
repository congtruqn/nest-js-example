import { Controller, Get, Post, Body, Patch, Param, Delete, Query, ClassSerializerInterceptor, UseInterceptors } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CagesService } from './cages.service';
import { CreateCageDto } from './dto/create-cage.dto';
import { UpdateCageDto } from './dto/update-cage.dto';
import { CagefilterDto } from './dto/filter.dto';
import { PaginationDto } from '../utils/pagination/interfaces/pagination.dto';
import { isUUID } from 'class-validator';
import { ResponseEntity } from '../utils/responses';


@ApiTags('Cages')
@Controller('cages')
export class CagesController {
  constructor(private readonly cagesService: CagesService) {}

  @Post()
  async create(@Body() createCageDto: CreateCageDto):Promise<ResponseEntity> {
    let cage = await this.cagesService.create(createCageDto);
    return new ResponseEntity({
      statusCode: 200,
      message: "",
      data: {cage},
    });
  }
  
  @Get()
  @UseInterceptors(ClassSerializerInterceptor)
  async findAll(@Query() filterPaginationDto: PaginationDto,@Query() cgefilterDto: CagefilterDto ):Promise<ResponseEntity>  {
    let listCages =  await  this.cagesService.findAll(filterPaginationDto,cgefilterDto);
    return new ResponseEntity({
      statusCode: 200,
      message: "",
      data: {...listCages},
    });
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

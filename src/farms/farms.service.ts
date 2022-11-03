import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateFarmDto } from './dto/create-farm.dto';
import { UpdateFarmDto } from './dto/update-farm.dto';
import { FarmsModel } from '../model/farms.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PaginationService } from '../utils/pagination/services/pagination.service';

export class FarmsService {
  constructor(
    @InjectRepository(FarmsModel)
    private _farmsRepository: Repository<FarmsModel>,
    private readonly _paginationService: PaginationService,
  ) {}
  create(createFarmDto: CreateFarmDto) {
    return this._farmsRepository.save(createFarmDto)
  }

  findAll(options:any) {
    return this._paginationService.paginate<FarmsModel>(
      this._farmsRepository,
      options,
      {
        order: {
          created_at: 'DESC', // "DESC"
        },
      },
    );
  }

  findOne(id:string) {
    const farm = this._farmsRepository.findOne({
      where: { id: id },
    });
    if(farm){
      return farm;
    }
    throw new HttpException('Todo not found', HttpStatus.NOT_FOUND);
  }

  async update(id: string, updateFarmDto: UpdateFarmDto) {
    await this._farmsRepository.update(id, updateFarmDto);
    const updatedTodo = await this._farmsRepository.findOne({
        where: { id: id },
      }
    );
    if (updatedTodo) {
      return updatedTodo;
    }
    throw new HttpException('Todo not found', HttpStatus.NOT_FOUND);
  }

  async remove(id: string) {
    const deletedTodo = await this._farmsRepository.delete(id);
    if (!deletedTodo.affected) {
      throw new HttpException('Farm not found', HttpStatus.NOT_FOUND);
    }
  }
}



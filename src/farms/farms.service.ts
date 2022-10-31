import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateFarmDto } from './dto/create-farm.dto';
import { UpdateFarmDto } from './dto/update-farm.dto';
import { FarmsModel } from '../model/farms.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class FarmsService {
  constructor(
    @InjectRepository(FarmsModel)
    private _farmsRepository: Repository<FarmsModel>,
  ) {}
  create(createFarmDto: CreateFarmDto) {
    return this._farmsRepository.save(createFarmDto)
  }

  findAll() {
    return `This action returns all farms`;
  }

  findOne(id) {
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

  remove(id: number) {
    return `This action removes a #${id} farm`;
  }
}
function IsUUID() {
  throw new Error('Function not implemented.');
}


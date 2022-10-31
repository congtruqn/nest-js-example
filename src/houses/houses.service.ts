import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { HousesModel } from '../model/houses.entity';
import { Repository } from 'typeorm';
import { CreateHouseDto } from './dto/create-house.dto';
import { UpdateHouseDto } from './dto/update-house.dto';

@Injectable()
export class HousesService {
  constructor(
    @InjectRepository(HousesModel)
    private _housesRepository: Repository<HousesModel>,
  ) {}
  async create(createHouseDto: CreateHouseDto) {
    const newUser = this._housesRepository.create({
      name: createHouseDto.name,
      farm: {
        id: createHouseDto.farm_id,
      },
    });
    await this._housesRepository.save(newUser);
  }

  findAll(farm_id:string) {
    return `This action returns all houses`;
  }

  findOne(id: number) {
    return `This action returns a #${id} house`;
  }

  update(id: number, updateHouseDto: UpdateHouseDto) {
    return `This action updates a #${id} house`;
  }

  remove(id: number) {
    return `This action removes a #${id} house`;
  }
}

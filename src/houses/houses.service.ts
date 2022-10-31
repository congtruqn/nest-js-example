import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
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

  async findAll(farm_id:string) {
    const farm = await this._housesRepository.findOne({
      where: {
        farm: {
          id : farm_id
        },
    },
    });
    if(farm){
      return farm;
    }
    throw new HttpException('Farm not found', HttpStatus.NOT_FOUND);
  }
  async findOne(id: string) {
    const house = await this._housesRepository.findOne({
      where: { id: id },
    });
    if(house){
      return house;
    }
    throw new HttpException('House not found', HttpStatus.NOT_FOUND);
  }

  update(id: number, updateHouseDto: UpdateHouseDto) {
    return `This action updates a #${id} house`;
  }

  remove(id: number) {
    return `This action removes a #${id} house`;
  }
}

import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { HousesModel } from '../model/houses.entity';
import { Repository } from 'typeorm';
import { CreateHouseDto } from './dto/create-house.dto';
import { UpdateHouseDto } from './dto/update-house.dto';
import { PaginationService } from '../utils/pagination/services/pagination.service';
@Injectable()
export class HousesService {
  constructor(
    @InjectRepository(HousesModel)
    private _housesRepository: Repository<HousesModel>,
    private readonly _paginationService: PaginationService,
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

  async findAll(farm_id:string,options:any) {

    return this._paginationService.paginate<HousesModel>(
      this._housesRepository,
      options,
      {
        relations: {
          farm: true,
        },
        order: {
          created_at: 'DESC',
        },
        where: {
          farm: {
            id : farm_id
          },
        }
      }
    );
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

  async update(id: string, updateHouseDto: UpdateHouseDto) {
    await this._housesRepository.update(id, {
      name: updateHouseDto.name,
      farm: {
        id: updateHouseDto.farm_id,
      },
    });
    const updatedHouse = await this._housesRepository.findOne({
        where: { id: id },
      }
    );
    if (updatedHouse) {
      return updatedHouse;
    }
    throw new HttpException('House not found', HttpStatus.NOT_FOUND);
  }

  async remove(id: string) {
    const deletedTodo = await this._housesRepository.delete(id);
    if (!deletedTodo.affected) {
      throw new HttpException('House not found', HttpStatus.NOT_FOUND);
    }
  }
}

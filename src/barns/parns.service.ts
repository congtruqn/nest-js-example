import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ParnsModel } from '../model/parns.entity';
import { Repository } from 'typeorm';
import { CreateParnDto } from './dto/create-parn.dto';
import { UpdateParnDto } from './dto/update-parn.dto';
import { PaginationService } from '../utils/pagination/services/pagination.service';
@Injectable()
export class ParnsService {
  constructor(
    @InjectRepository(ParnsModel)
    private _housesRepository: Repository<ParnsModel>,
    private readonly _paginationService: PaginationService,
  ) {}
  async create(createHouseDto: CreateParnDto) {
    const newUser = this._housesRepository.create({
      name: createHouseDto.name,
      farm: {
        id: createHouseDto.farm_id,
      },
    });
    return await this._housesRepository.save(newUser);
  }

  async findAll(options:any,housefilterDto:any) {
    const queryBuilder = this._housesRepository.createQueryBuilder('parns')
    .leftJoinAndSelect('parns.farm', 'farms')
    .orderBy('parns.created_at', 'DESC');
    if(housefilterDto.farm_id){
      queryBuilder.andWhere('farms.id IN (:farm_id)', {
        farm_id:housefilterDto.farm_id
      })
    }
    return this._paginationService.paginate<ParnsModel>(
      queryBuilder,
      options,
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

  async update(id: string, updateHouseDto: UpdateParnDto) {
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
    throw new HttpException('House not found', HttpStatus.NO_CONTENT);
  }

  async remove(id: string) {
    const deletedTodo = await this._housesRepository.delete(id);
    if (!deletedTodo.affected) {
      throw new HttpException('House not found', HttpStatus.NO_CONTENT);
    }
  }
}

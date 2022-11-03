import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateCageDto } from './dto/create-cage.dto';
import { UpdateCageDto } from './dto/update-cage.dto';
import { PaginationService } from '../utils/pagination/services/pagination.service';
import { InjectRepository } from '@nestjs/typeorm';
import { CagesModel } from '../model/cages.entity';
import { Repository } from 'typeorm';
@Injectable()
export class CagesService {
  constructor(
    @InjectRepository(CagesModel)
    private _cagesRepository: Repository<CagesModel>,
    private readonly _paginationService: PaginationService,
  ) {}
  async create(CreateCageDto: CreateCageDto) {
    const newUser = this._cagesRepository.create({
      name: CreateCageDto.name,
      parn: {
        id: CreateCageDto.parn_id,
      },
    });
    return await this._cagesRepository.save(newUser);
  }

  findAll(options:any,cagefilterDto:any) {
    const queryBuilder = this._cagesRepository.createQueryBuilder('cages')
    .leftJoinAndSelect('cages.parn', 'parns')
    .leftJoinAndSelect('parns.farm', 'farms')
    .orderBy('cages.created_at', 'DESC');
    if(cagefilterDto.parn_id){
      queryBuilder.andWhere('parns.id IN (:parn_id)', {
        parn_id:cagefilterDto.parn_id
      })
    }
    if(cagefilterDto.farm_id){
      queryBuilder.andWhere('farms.id IN (:farm_id)', {
        farm_id:cagefilterDto.farm_id
      })
    }
    return this._paginationService.paginate<CagesModel>(
      queryBuilder,
      options,
    );
  }

  async findOne(id: string) {
    const house = await this._cagesRepository.findOne({
      where: { id: id },
    });
    if(house){
      return house;
    }
    throw new HttpException('House not found', HttpStatus.NO_CONTENT);
  }

  async update(id: string, updateCageDto: UpdateCageDto) {
    await this._cagesRepository.update(id, {
      name: updateCageDto.name,
      parn: {
        id: updateCageDto.parn_id,
      },
    });
    const updatedHouse = await this._cagesRepository.findOne({
        where: { id: id },
      }
    );
    if (updatedHouse) {
      return updatedHouse;
    }
    throw new HttpException('House not found', HttpStatus.NO_CONTENT);
  }

  async remove(id: string) {
    const deletedCage = await this._cagesRepository.delete(id);
    if (!deletedCage.affected) {
      throw new HttpException('House not found', HttpStatus.NO_CONTENT);
    }
  }
}

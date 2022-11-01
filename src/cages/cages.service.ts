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
      house: {
        id: CreateCageDto.house_id,
      },
    });
    await this._cagesRepository.save(newUser);
  }

  findAll(house_id:string,options:any) {
    return this._paginationService.paginate<CagesModel>(
      this._cagesRepository,
      options,
      {
        order: {
          created_at: 'DESC', // "DESC"
        },
        where: {
          house: {
            id : house_id
          },
        }
      },
    );
  }

  async findOne(id: string) {
    const house = await this._cagesRepository.findOne({
      where: { id: id },
    });
    if(house){
      return house;
    }
    throw new HttpException('House not found', HttpStatus.NOT_FOUND);
  }

  async update(id: string, updateCageDto: UpdateCageDto) {
    await this._cagesRepository.update(id, {
      name: updateCageDto.name,
      house: {
        id: updateCageDto.house_id,
      },
    });
    const updatedHouse = await this._cagesRepository.findOne({
        where: { id: id },
      }
    );
    if (updatedHouse) {
      return updatedHouse;
    }
    throw new HttpException('House not found', HttpStatus.NOT_FOUND);
  }

  remove(id: number) {
    return `This action removes a #${id} cage`;
  }
}

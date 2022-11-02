import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PensModel } from '../model/pens.entity';
import { PaginationService } from '../utils/pagination/services/pagination.service';
import { Repository } from 'typeorm';
import { CreatePenDto } from './dto/create-pen.dto';
import { UpdatePenDto } from './dto/update-pen.dto';

@Injectable()
export class PensService {
  constructor(
    @InjectRepository(PensModel)
    private _pensRepository: Repository<PensModel>,
    private readonly _paginationService: PaginationService,
  ) {}
  async create(CreatePenDto: CreatePenDto) {
    const newUser = this._pensRepository.create({
      name: CreatePenDto.name,
      cage: {
        id: CreatePenDto.cage_id,
      },
    });
    await this._pensRepository.save(newUser);
  }

  findAll(options:any,penfilterDto:any) {
    const queryBuilder = this._pensRepository.createQueryBuilder('pens')
    .leftJoinAndSelect('pens.cage', 'cages')
    .leftJoinAndSelect('cages.house', 'houses')
    .orderBy('pens.created_at', 'DESC');
    if(penfilterDto.cage_id){
      let cage_id = penfilterDto.cage_id;
      queryBuilder.andWhere('cages.id IN (:cage_id)', {
        cage_id
      })
    }
    if(penfilterDto.house_id){
      queryBuilder.andWhere('houses.id IN (:house_id)', {
        house_id:penfilterDto.house_id
      })
    }
    return this._paginationService.paginate<PensModel>(
      queryBuilder,
      options,
    );
  }

  async findOne(id: string) {
    const pen = await this._pensRepository.findOne({
      where: { id: id },
    });
    if(pen){
      return pen;
    }
    throw new HttpException('House not found', HttpStatus.NOT_FOUND);
  }

  async update(id: string, updatePenDto: UpdatePenDto) {
    await this._pensRepository.update(id, {
      name: updatePenDto.name,
      cage: {
        id: updatePenDto.cage_id,
      },
    });
    const updatedPen = await this._pensRepository.findOne({
        where: { id: id },
      }
    );
    if (updatedPen) {
      return updatedPen;
    }
    throw new HttpException('Pen not found', HttpStatus.NOT_FOUND);
  }

  async remove(id: string) {
    const deletedPen = await this._pensRepository.delete(id);
    if (!deletedPen.affected) {
      throw new HttpException('Pen not found', HttpStatus.NOT_FOUND);
    }
  }
}

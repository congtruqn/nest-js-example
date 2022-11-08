import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AnimalTypesModel } from '../model/animal.type.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AnimalTypesService {
  constructor(
    @InjectRepository(AnimalTypesModel)
    private _farmsRepository: Repository<AnimalTypesModel>,
    
  ) {}
  findAll() {
    const animal = this._farmsRepository.find({
      where: { status: 1 },
    });
    return animal;
  }
}

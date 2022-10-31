import { Injectable } from '@nestjs/common';
import { CreateCageDto } from './dto/create-cage.dto';
import { UpdateCageDto } from './dto/update-cage.dto';

@Injectable()
export class CagesService {
  create(createCageDto: CreateCageDto) {
    return 'This action adds a new cage';
  }

  findAll() {
    return `This action returns all cages`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cage`;
  }

  update(id: number, updateCageDto: UpdateCageDto) {
    return `This action updates a #${id} cage`;
  }

  remove(id: number) {
    return `This action removes a #${id} cage`;
  }
}

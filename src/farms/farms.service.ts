import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateFarmDto } from './dto/create-farm.dto';
import { UpdateFarmDto } from './dto/update-farm.dto';
import { FarmsModel } from '../model/farms.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PaginationService } from '../utils/pagination/services/pagination.service';
import { UploadFileService } from '../utils/uploadfile/services/uploadfile.service';

export class FarmsService {
  constructor(
    @InjectRepository(FarmsModel)
    private _farmsRepository: Repository<FarmsModel>,
    private readonly _paginationService: PaginationService,
    private readonly _uploadFileService: UploadFileService,
    
  ) {}
  create(createFarmDto: CreateFarmDto) {
    return this._farmsRepository.save(createFarmDto)
  }

  findAll(options:any) {
    return this._paginationService.paginate<FarmsModel>(
      this._farmsRepository,
      options,
      {
        order: {
          created_at: 'DESC', // "DESC"
        },
      },
    );
  }

  async findOne(id:string) {
    let images = "iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAApgAAAKYB3X3/OAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAANCSURBVEiJtZZPbBtFFMZ/M7ubXdtdb1xSFyeilBapySVU8h8OoFaooFSqiihIVIpQBKci6KEg9Q6H9kovIHoCIVQJJCKE1ENFjnAgcaSGC6rEnxBwA04Tx43t2FnvDAfjkNibxgHxnWb2e/u992bee7tCa00YFsffekFY+nUzFtjW0LrvjRXrCDIAaPLlW0nHL0SsZtVoaF98mLrx3pdhOqLtYPHChahZcYYO7KvPFxvRl5XPp1sN3adWiD1ZAqD6XYK1b/dvE5IWryTt2udLFedwc1+9kLp+vbbpoDh+6TklxBeAi9TL0taeWpdmZzQDry0AcO+jQ12RyohqqoYoo8RDwJrU+qXkjWtfi8Xxt58BdQuwQs9qC/afLwCw8tnQbqYAPsgxE1S6F3EAIXux2oQFKm0ihMsOF71dHYx+f3NND68ghCu1YIoePPQN1pGRABkJ6Bus96CutRZMydTl+TvuiRW1m3n0eDl0vRPcEysqdXn+jsQPsrHMquGeXEaY4Yk4wxWcY5V/9scqOMOVUFthatyTy8QyqwZ+kDURKoMWxNKr2EeqVKcTNOajqKoBgOE28U4tdQl5p5bwCw7BWquaZSzAPlwjlithJtp3pTImSqQRrb2Z8PHGigD4RZuNX6JYj6wj7O4TFLbCO/Mn/m8R+h6rYSUb3ekokRY6f/YukArN979jcW+V/S8g0eT/N3VN3kTqWbQ428m9/8k0P/1aIhF36PccEl6EhOcAUCrXKZXXWS3XKd2vc/TRBG9O5ELC17MmWubD2nKhUKZa26Ba2+D3P+4/MNCFwg59oWVeYhkzgN/JDR8deKBoD7Y+ljEjGZ0sosXVTvbc6RHirr2reNy1OXd6pJsQ+gqjk8VWFYmHrwBzW/n+uMPFiRwHB2I7ih8ciHFxIkd/3Omk5tCDV1t+2nNu5sxxpDFNx+huNhVT3/zMDz8usXC3ddaHBj1GHj/As08fwTS7Kt1HBTmyN29vdwAw+/wbwLVOJ3uAD1wi/dUH7Qei66PfyuRj4Ik9is+hglfbkbfR3cnZm7chlUWLdwmprtCohX4HUtlOcQjLYCu+fzGJH2QRKvP3UNz8bWk1qMxjGTOMThZ3kvgLI5AzFfo379UAAAAASUVORK5CYII="
    let buf = Buffer.from(images,'base64');
    await this._uploadFileService.remove('/files/README_FTP.png')
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

  async remove(id: string) {
    const deletedTodo = await this._farmsRepository.delete(id);
    if (!deletedTodo.affected) {
      throw new HttpException('Farm not found', HttpStatus.NOT_FOUND);
    }
  }
}



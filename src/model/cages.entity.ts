import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn
} from 'typeorm';
import { BaseEntity } from './base.entity';
import { HousesModel } from './houses.entity';

@Entity({ name: 'cages' })
export class CagesModel extends BaseEntity {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 100 })
  name: string;

  @ManyToOne(() => HousesModel, (house) => house.id)
  @JoinColumn({ name: 'house_id' })
  house: HousesModel

}


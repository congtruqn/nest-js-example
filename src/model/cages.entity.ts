import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  OneToMany
} from 'typeorm';
import { BaseEntity } from './base.entity';
import { HousesModel } from './houses.entity';
import { PensModel } from './pens.entity';

@Entity({ name: 'cages' })
export class CagesModel extends BaseEntity {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 100 })
  name: string;

  @ManyToOne(() => HousesModel, (house) => house.id)
  @JoinColumn({ name: 'house_id' })
  house: HousesModel

  @OneToMany(
    () => PensModel,
    (pens) => pens.id,
  )
  CageOfPen: PensModel[];

}


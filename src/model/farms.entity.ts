import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  OneToMany
} from 'typeorm';
import { BaseEntity } from './base.entity';
import { HousesModel } from './houses.entity';
export enum farmType {
  OPEN = 1,
  CLOSE = 0,
}
@Entity({ name: 'farms' })
export class FarmsModel extends BaseEntity {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 100 })
  name: string;

  @Column({ type: 'varchar', length: 20 })
  farm_code: string;

  @UpdateDateColumn()
  start_date: Date;

  @Column({ type: 'varchar', length: 100 })
  region: string;
  
  @Column({ type: 'varchar', length: 100 })
  address: string;

  @Column({ type: 'int' })
  acreage: number;
  
  @Column({ type: 'int' })
  farm_type: number;

  @Column({ type: 'int' })
  farm_size: number;
 
  @Column({ type: 'int' })
  business_unit: number;

  @Column({ type: 'varchar', length: 50 })
  contact_persion: string;

  @Column({ type: 'varchar', length: 50 })
  contact_phone: string;

  @OneToMany(() => HousesModel, (house) => house.farm)
  house: HousesModel[]

}


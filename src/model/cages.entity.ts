import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';
import { BaseEntity } from './base.entity';
export enum farmType {
  OPEN = 1,
  CLOSE = 0,
}
@Entity({ name: 'cages' })
export class CagesModel extends BaseEntity {

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
  
  @Column({
    name: 'farm_type',
    type: 'enum',
    enum: farmType,
    default: farmType.OPEN
  })
  farm_type:number;

  @Column({ type: 'int' })
  farm_size: number;
 
  @Column({ type: 'varchar', length: 50 })
  contact_persion: string;

  @Column({ type: 'varchar', length: 50 })
  phone_number: string;

}


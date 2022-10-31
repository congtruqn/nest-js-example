import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    JoinColumn,
    ManyToOne
  } from 'typeorm';
  import { BaseEntity } from './base.entity';
  import { FarmsModel } from './farms.entity';

  @Entity({ name: 'houses' })
  export class HousesModel extends BaseEntity {
  
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column({ type: 'varchar', length: 100 })
    name: string;

    @ManyToOne(() => FarmsModel, (farm) => farm.id)
    @JoinColumn({ name: 'farm_id' })
    farm: FarmsModel
  }
  
  
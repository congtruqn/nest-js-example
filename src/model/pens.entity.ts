import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    JoinColumn,
    ManyToOne
  } from 'typeorm';
  import { BaseEntity } from './base.entity';
  import { CagesModel } from './cages.entity';
  
  @Entity({ name: 'pens' })
  export class PensModel extends BaseEntity {
  
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column({ type: 'varchar', length: 100 })
    name: string;
  
    @ManyToOne(() => CagesModel, (cage) => cage.id)
    @JoinColumn({ name: 'cage_id' })
    cage: CagesModel
  
  }
  
  
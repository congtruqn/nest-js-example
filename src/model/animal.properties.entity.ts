
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    JoinColumn,
    ManyToOne,
    OneToMany
  } from 'typeorm';
  import { BaseEntity } from './base.entity';
  import { FarmsModel } from './farms.entity';
  import { AnimalsModel } from './animal.entity';

  @Entity({ name: 'aninal_types' })
  export class AnimalTypesModel extends BaseEntity {
  
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column({ type: 'varchar', length: 100 })
    name: string;

    @OneToMany(
      () => AnimalsModel,
      (cages) => cages.id,
    )
    ParnToCages: AnimalsModel[];
  }
  
  
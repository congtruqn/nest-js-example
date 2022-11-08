
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    JoinColumn,
    ManyToOne,
    OneToMany
  } from 'typeorm';
  import { BaseEntity } from './base.entity';
  import { AnimalsModel } from './animal.entity';

  @Entity({ name: 'animal_types' })
  export class AnimalTypesModel extends BaseEntity {
  
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ type: 'varchar', length: 50 })
    name: string;

    @Column({ type: 'int'})
    status: number;

    @OneToMany(
      () => AnimalsModel,
      (animal) => animal.id,
    )
    TypeOfAnimals: AnimalsModel[];
  }
  
  

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
  import { AnimalTypesModel } from './animal.type.entity';

  @Entity({ name: 'animal_events' })
  export class AnimalEventsModel extends BaseEntity {
  
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column({ type: 'varchar', length: 100 })
    name: string;

    @ManyToOne(() => AnimalTypesModel, (type) => type.id)
    AnimalTypes: AnimalTypesModel[];

    @ManyToOne(() => AnimalsModel, (animals) => animals.id)
    EventsOfAnimal: AnimalsModel[];
  }
  
  
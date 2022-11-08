
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    JoinColumn,
    ManyToOne,
    OneToMany,
    UpdateDateColumn
  } from 'typeorm';
  import { BaseEntity } from './base.entity';
  import { AnimalTypesModel } from './animal.type.entity';
  import { AnimalEventsModel } from './animal.events.entity';

  @Entity({ name: 'animals' })
  export class AnimalsModel extends BaseEntity {
  
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column({ type: 'varchar', length: 50 })
    name: string;

    @Column({ type: 'varchar', length: 20 })
    register_id: string;
    
    @UpdateDateColumn()
    enter_date: Date;

    @Column({ type: 'varchar', length: 20 })
    genetics: string;

    @UpdateDateColumn()
    birthday: Date;

    @Column({ type: 'varchar', length: 20 })
    litter_id: string;

    @Column({ type: 'varchar', length: 20 })
    ori_type: string;

    @Column({ type: 'varchar', length: 20 })
    eid: string;    

    @Column({ type: 'varchar', length: 20 })
    origin: string; 

    @Column({ type: 'varchar', length: 20 })
    initial_parity: string;

    @Column({ type: 'varchar', length: 20 })
    location: string;

    @Column({ type: 'varchar', length: 20 })
    sire: string;
    
    @Column({ type: 'varchar', length: 20 })
    dam: string;

    @Column({ type: 'float'})
    weight: number;

    @Column({ type: 'float'})
    price: number;
    
    @Column({ type: 'varchar', length: 100 })
    comment: string;

    @Column({ type: 'int' })
    status: number;
    
    @ManyToOne(() => AnimalTypesModel, (type) => type.id)
    @JoinColumn({ name: 'animal_type' })
    type: AnimalTypesModel

    @OneToMany(
        () => AnimalEventsModel,
        (event) => event.id,
    )
    events: AnimalEventsModel[];

  }
  
  
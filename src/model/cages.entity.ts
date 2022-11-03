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
import { ParnsModel } from './parns.entity';
import { PensModel } from './pens.entity';

@Entity({ name: 'cages' })
export class CagesModel extends BaseEntity {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 100 })
  name: string;

  @ManyToOne(() => ParnsModel, (parn) => parn.id)
  @JoinColumn({ name: 'parn_id' })
  parn: ParnsModel

  @OneToMany(
    () => PensModel,
    (pens) => pens.id,
  )
  CageOfPen: PensModel[];

}


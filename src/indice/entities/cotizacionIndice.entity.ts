import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
  } from 'typeorm';
  import { Indice} from './indice.entity';

@Entity('cotizacionesIndice')
export class cotizacionesIndice {
  @PrimaryGeneratedColumn({
    type: 'bigint',
  })
  public id: number;

  @Column({
    name: 'fecha',
    type: 'varchar',
    precision: 10,
  })
  public fecha: string;

  @Column({
    name: 'hora',
    type: 'varchar',
    precision: 5,
  })
  public hora: string;

  @Column({
    type: 'date',
  })
  public dateUTC: string;

  @Column({
    name: 'cotization',
    type: 'decimal',
    precision: 7,
    scale: 2,
  })
  public cotizationIndice: number;

  @ManyToOne(() => Indice)
  @JoinColumn({
    name: 'idIndice',
    referencedColumnName: 'id',
  })
  indice: Indice;

  constructor() {}
}

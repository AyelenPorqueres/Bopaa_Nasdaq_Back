import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('empresas')
export class Empresa {
  @PrimaryGeneratedColumn({
    type: 'int',
  })
  public id: number;

  @Column({
    name: 'codEmpresa',
    length: 100,
  })
  public codEmpresa: string;

  @Column({
    name: 'empresaNombre',
    length: 100,
  })
  public empresaNombre: string;

  @Column({
    name: 'cotizationInicial',
    type: 'decimal',
    precision: 7,
    scale: 2,
  })
  public cotizationInicial: number;

  @Column({
    name: 'cantidadAcciones',
    type: 'bigint',
  })
  public cantidadAcciones: number;

  constructor(codempresa: string, empresaNombre: string) {
    this.codEmpresa = codempresa;
    this.empresaNombre = empresaNombre;
  }

  public getId(): number {
    return this.id;
  }

  public getCodempresa(): string {
    return this.codEmpresa;
  }

  public setCodempresa(codempresa: string) {
    this.codEmpresa = codempresa;
  }

  public getEmpresaNombre(): string {
    return this.empresaNombre;
  }

  public setEmpresaNombre(empresaNombre: string) {
    this.empresaNombre = empresaNombre;
  }

  public getCotizacionInicial(): number {
    return this.cotizationInicial;
  }

  public getCantidadAcciones(): number {
    return this.cantidadAcciones;
  }
}

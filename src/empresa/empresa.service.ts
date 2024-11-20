import { Injectable } from '@nestjs/common';
import { CreateEmpresaDto } from './dto/create-empresa.dto';
import { UpdateEmpresaDto } from './dto/update-empresa.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Empresa } from './entities/empresa.entity';
import { FindManyOptions, Repository,  } from 'typeorm';
import { Cotizacion } from './entities/cotizacion.entity';

@Injectable()
export class EmpresaService {

  constructor(
    @InjectRepository(Empresa)
    private readonly empresaRepository: Repository<Empresa>,
    @InjectRepository (Cotizacion)
    private readonly cotizacionRepository: Repository<Cotizacion>,
  ) { }
  
  async getAllEmpresas(): Promise<Empresa[]> {
    return await this.empresaRepository.find();
  }
  
  async getUltimaCotizacion (codigoEmpresa: string): Promise<Cotizacion> {
    const criterio: FindManyOptions<Cotizacion> = { 
      where: {empresa : {codEmpresa : codigoEmpresa}},
      order: {
          dateUTC: "DESC",
          hora: "DESC"
      },
      take: 1,
   };

    const ultCotizacion = await this.cotizacionRepository.find(criterio);
    return ultCotizacion[0];
  }










  findAll() {
    return `This action returns all empresa`;
  }

  findOne(id: number) {
    return `This action returns a #${id} empresa`;
  }

  update(id: number, updateEmpresaDto: UpdateEmpresaDto) {
    return `This action updates a #${id} empresa`;
  }

  remove(id: number) {
    return `This action removes a #${id} empresa`;
  }
}

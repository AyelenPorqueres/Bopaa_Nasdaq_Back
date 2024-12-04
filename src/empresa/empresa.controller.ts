import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { EmpresaService } from './empresa.service';
import { GempresaService } from 'src/services/gempresas.service';
import { Empresa } from './entities/empresa.entity';



@Controller('empresa')
export class EmpresaController {
  constructor(private readonly empresaService: EmpresaService, private readonly gempresaService: GempresaService) {}

  @Get()
  async getAllEmpresas(): Promise<Empresa[]> {
    return await this.empresaService.getAllEmpresas();
  }


  @Get('/:codigoEmpresa/details')
  async getDetalleEmpresa(
    @Param('codigoEmpresa') codigoEmpresa:string,
  ): Promise <any>{
    return await this.gempresaService.getDetalleEmpresa(codigoEmpresa);
  }


  @Get('/:codigoEmpresa/ultima')
  async getUltimaCotizacion(
    @Param('codigoEmpresa') codigoEmpresa: string,
    @Query('dias') dias: number,
  ): Promise<any> {
    return await this.empresaService.getDatosGrafico(codigoEmpresa,dias);
  }


  @Get('/cotizacionActual')
  async getCotizacionActual(): Promise<any[]> {
    return await this.empresaService.cotizacionActual();
  }

 @Get('/obtenerCotizaciones')
  async obtenerDatosEmpresas(): Promise <void> {
   return await this.empresaService.obtenerDatosEmpresas();
 }
  
 @Get('/participacionEmpresas')
 async getParticipacionEmpresas(): Promise<any[]> {
   return await this.empresaService.participacionEmpresas();
 }


}

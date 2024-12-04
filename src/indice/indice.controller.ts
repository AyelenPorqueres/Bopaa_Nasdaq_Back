import { Controller, Get, Query } from "@nestjs/common";
import { IndiceService } from "./indice.service";
import { Indice } from "./entities/indice.entity";

@Controller('indices')
export class IndiceController {
  constructor(private readonly indiceService: IndiceService) { }

  @Get('/getIndices')
  async getAllIndices(): Promise<Indice[]> {
    return await this.indiceService.getAllIndices();
  }

  @Get('/getCotizaciones')
  async getCotizaciones(
    @Query('dias') dias: number,
    @Query('allIndices') allIndices: string,
  ): Promise<Indice[][]> {
    return await this.indiceService.getDatosGrafico({ dias: dias, allIndices: allIndices });
  }
}

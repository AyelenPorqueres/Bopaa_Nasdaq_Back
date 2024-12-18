import { Injectable, Logger } from "@nestjs/common";
import axios, { AxiosResponse } from "axios";
import { Empresa } from "src/empresa/entities/empresa.entity";
import { Indice } from "src/indice/entities/indice.entity";


@Injectable()

export class GempresaService {
  private logger: Logger = new Logger(GempresaService.name);

  createClient = () => {
    const client = axios.create({
      baseURL: 'http://ec2-54-145-211-254.compute-1.amazonaws.com:3000'
    });
    return client;
  }
  clientAxios = this.createClient();

  getDetalleEmpresa = async (codigoEmpresa: string): Promise<Empresa> => {
    try {
      const respuesta: AxiosResponse<any, any> = await this.clientAxios.get(`/empresas/${codigoEmpresa}/details`);
      return respuesta.data;
    } catch (error: any) {
      return error.response.data.statusCode;
    }
  }

  async getCotizaciones(codigoEmpresa: string, fechaDesde: string, fechaHasta: string) {
    try {
      const respuesta: AxiosResponse<any, any> = await this.clientAxios.get(`/empresas/${codigoEmpresa}/cotizaciones`,
        { params: { fechaDesde: fechaDesde, fechaHasta: fechaHasta } });
      return respuesta.data;
    } catch (error: any) {
      this.logger.error(error.response.data.status + ' ' + error.response.data.error);
    }
  }

  async postIndice(indice: Indice) {
    try {
      const respuesta: AxiosResponse<any, any> = await this.clientAxios.post(`/indices/cotizaciones`, indice);
      console.log("respuesta", respuesta)
      console.log("respuesta.data", respuesta.data)
      return respuesta.data;
    } catch (error: any) {
      this.logger.error(error.response.data.status + ' ' + error.response.data.error);
    }
  }

  async getIndices() {
    try {
      const respuesta: AxiosResponse<any, any> = await this.clientAxios.get(`/indices`);
      return respuesta.data;
    } catch (error: any) {
      this.logger.error(error.response.data.status + ' ' + error.response.data.error);
    }
  }

  async getCotizacionesIndices(codigoIndice: string, fechaDesde: string, fechaHasta: string) {
    try {
      const respuesta: AxiosResponse<any, any> = await this.clientAxios.get(`/indices/${codigoIndice}/cotizaciones`,
        { params: { fechaDesde: fechaDesde, fechaHasta: fechaHasta } });
      return respuesta.data;
    } catch (error: any) {
      this.logger.error(error.response.data.status + ' ' + error.response.data.error);
    }
  }
}


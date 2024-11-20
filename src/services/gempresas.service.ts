import { Injectable } from "@nestjs/common";
import axios, { AxiosResponse } from "axios";
import { Empresa } from "src/empresa/entities/empresa.entity";


@Injectable()

export class GempresaService{
    createClient = () => {
        const client = axios.create({
          baseURL: 'http://ec2-54-145-211-254.compute-1.amazonaws.com:3000'
        });
        return client;
      }
    clientAxios = this.createClient();

    getDetalleEmpresa = async (codigoEmpresa: string): Promise <Empresa> =>{
      try {
        const respuesta: AxiosResponse<any, any> = await this.clientAxios.get(`/empresas/${codigoEmpresa}/details`);
        return respuesta.data;
      } catch (error:any) {
        return error.response.data.statusCode;
      }
    }
}
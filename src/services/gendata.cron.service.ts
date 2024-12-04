import { Injectable, Logger } from "@nestjs/common";
import { Cron } from "@nestjs/schedule";
import { EmpresaService } from "src/empresa/empresa.service";
import { IndiceService } from "src/indice/indice.service";

@Injectable()
export class GenDataService {
    private logger: Logger = new Logger(GenDataService.name);

    constructor(
        private empresaService: EmpresaService,
        private indiceService: IndiceService) {
        this.logger.log('Servicio Gen Data Inicializado');
    }

    @Cron('0 29 * * * *')
    obtenerDatos() {
        this.logger.log('Obtener datos empresas iniciado');
        this.empresaService.obtenerDatosEmpresas();
    }

    @Cron('0 30 * * * *')
    crearIndice() {
        this.logger.log('Generar Indice iniciado');
        this.indiceService.calcularIndices();
    }

    @Cron('0 15 * * * *')
    obtenerIndices() {
        this.logger.log('Traer indices iniciado');
        this.indiceService.obtenerIndices();
    }



}
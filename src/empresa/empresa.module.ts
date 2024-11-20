import { Module } from '@nestjs/common';
import { EmpresaService } from './empresa.service';
import { EmpresaController } from './empresa.controller';
import { Cotizacion } from './entities/cotizacion.entity';
import { Empresa } from './entities/empresa.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GempresaService } from 'src/services/gempresas.service';

@Module({
  imports: [TypeOrmModule.forFeature([Empresa, Cotizacion])],
  controllers: [EmpresaController],
  providers: [EmpresaService,GempresaService],
})
export class EmpresaModule {}

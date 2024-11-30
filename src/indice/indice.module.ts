import { Module } from '@nestjs/common';
import { IndiceService } from './indice.service';
import { IndiceController } from './indice.controller';
import { Indice } from './entities/indice.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cotizacion } from 'src/empresa/entities/cotizacion.entity';
import { GempresaService } from 'src/services/gempresas.service';

@Module({
  imports: [TypeOrmModule.forFeature([Indice, Cotizacion])],
  controllers: [IndiceController],
  providers: [IndiceService, GempresaService],
  exports: [IndiceService],
})
export class IndiceModule {}

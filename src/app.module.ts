import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmpresaModule } from './empresa/empresa.module';
import { IndiceModule } from './indice/indice.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GenDataService } from './services/gendata.cron.service';
import { GempresaService } from './services/gempresas.service';
import { ScheduleModule } from '@nestjs/schedule';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }),
  TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'ayee6',
    database: 'nasdaq',
    synchronize: false,
    entities: ['dist/**/*.entity.js'],
    logging: 'all',
  }),
    EmpresaModule, IndiceModule, ScheduleModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService, GenDataService, GempresaService],

})
export class AppModule { }


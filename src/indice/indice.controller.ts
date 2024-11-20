import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { IndiceService } from './indice.service';
import { CreateIndiceDto } from './dto/create-indice.dto';
import { UpdateIndiceDto } from './dto/update-indice.dto';

@Controller('indice')
export class IndiceController {
  constructor(private readonly indiceService: IndiceService) {}

  @Post()
  create(@Body() createIndiceDto: CreateIndiceDto) {
    return this.indiceService.create(createIndiceDto);
  }

  @Get()
  findAll() {
    return this.indiceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.indiceService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateIndiceDto: UpdateIndiceDto) {
    return this.indiceService.update(+id, updateIndiceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.indiceService.remove(+id);
  }
}

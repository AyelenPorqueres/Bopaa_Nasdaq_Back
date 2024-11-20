import { Injectable } from '@nestjs/common';
import { CreateIndiceDto } from './dto/create-indice.dto';
import { UpdateIndiceDto } from './dto/update-indice.dto';

@Injectable()
export class IndiceService {
  create(createIndiceDto: CreateIndiceDto) {
    return 'This action adds a new indice';
  }

  findAll() {
    return `This action returns all indice`;
  }

  findOne(id: number) {
    return `This action returns a #${id} indice`;
  }

  update(id: number, updateIndiceDto: UpdateIndiceDto) {
    return `This action updates a #${id} indice`;
  }

  remove(id: number) {
    return `This action removes a #${id} indice`;
  }
}

import { PartialType } from '@nestjs/mapped-types';
import { CreateIndiceDto } from './create-indice.dto';

export class UpdateIndiceDto extends PartialType(CreateIndiceDto) {}

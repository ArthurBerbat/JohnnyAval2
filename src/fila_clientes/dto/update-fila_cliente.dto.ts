import { PartialType } from '@nestjs/swagger';
import { CreateFilaClienteDto } from './create-fila_cliente.dto';

export class UpdateFilaClienteDto extends PartialType(CreateFilaClienteDto) {}

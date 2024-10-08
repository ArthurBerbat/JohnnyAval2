import { Injectable } from '@nestjs/common';
import { CreateFilaClienteDto } from './dto/create-fila_cliente.dto';
import { UpdateFilaClienteDto } from './dto/update-fila_cliente.dto';

@Injectable()
export class FilaClientesService {
  create(createFilaClienteDto: CreateFilaClienteDto) {
    return 'This action adds a new filaCliente';
  }

  findAll() {
    return `This action returns all filaClientes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} filaCliente`;
  }

  update(id: number, updateFilaClienteDto: UpdateFilaClienteDto) {
    return `This action updates a #${id} filaCliente`;
  }

  remove(id: number) {
    return `This action removes a #${id} filaCliente`;
  }
}

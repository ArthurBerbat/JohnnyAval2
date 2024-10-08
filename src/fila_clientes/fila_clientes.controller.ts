import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FilaClientesService } from './fila_clientes.service';
import { CreateFilaClienteDto } from './dto/create-fila_cliente.dto';
import { UpdateFilaClienteDto } from './dto/update-fila_cliente.dto';

@Controller('fila-clientes')
export class FilaClientesController {
  constructor(private readonly filaClientesService: FilaClientesService) {}

  @Post()
  create(@Body() createFilaClienteDto: CreateFilaClienteDto) {
    return this.filaClientesService.create(createFilaClienteDto);
  }

  @Get()
  findAll() {
    return this.filaClientesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.filaClientesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFilaClienteDto: UpdateFilaClienteDto) {
    return this.filaClientesService.update(+id, updateFilaClienteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.filaClientesService.remove(+id);
  }
}

import { Module } from '@nestjs/common';
import { FilaClientesService } from './fila_clientes.service';
import { FilaClientesController } from './fila_clientes.controller';

@Module({
  controllers: [FilaClientesController],
  providers: [FilaClientesService],
})
export class FilaClientesModule {}

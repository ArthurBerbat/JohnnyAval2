import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

import { FilaClientesModule } from './fila_clientes/fila_clientes.module';

@Module({
  imports: [FilaClientesModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule { }

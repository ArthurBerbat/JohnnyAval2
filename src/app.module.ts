import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FilaClientesModule } from './fila_clientes/fila_clientes.module';

@Module({
  imports: [FilaClientesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

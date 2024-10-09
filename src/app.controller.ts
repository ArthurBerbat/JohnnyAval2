import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';
import { CriarFilaAtendimentoDto } from './dtos/criar-fila-dto';

@Controller('fila-atendimento')
export class AppController {
  private clienteAdminBackend: ClientProxy;

  constructor() {
    this.clienteAdminBackend = ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://admin:123456@localhost:5672/arquivoprojetormq'],
        queue: 'admin-backend',
      },
    });
  }

  @Post('criar')
  @UsePipes(ValidationPipe)
  async criarFilaAtendimento(@Body() criarFilaAtendimentoDto: CriarFilaAtendimentoDto) {
    return await this.clienteAdminBackend.emit('criar-fila-atendimento', criarFilaAtendimentoDto);
  }
}

import { Test, TestingModule } from '@nestjs/testing';
import { FilaClientesController } from './fila_clientes.controller';
import { FilaClientesService } from './fila_clientes.service';

describe('FilaClientesController', () => {
  let controller: FilaClientesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FilaClientesController],
      providers: [FilaClientesService],
    }).compile();

    controller = module.get<FilaClientesController>(FilaClientesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

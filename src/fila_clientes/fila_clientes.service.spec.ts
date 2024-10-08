import { Test, TestingModule } from '@nestjs/testing';
import { FilaClientesService } from './fila_clientes.service';

describe('FilaClientesService', () => {
  let service: FilaClientesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FilaClientesService],
    }).compile();

    service = module.get<FilaClientesService>(FilaClientesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

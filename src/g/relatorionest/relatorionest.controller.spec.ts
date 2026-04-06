import { Test, TestingModule } from '@nestjs/testing';
import { RelatorionestController } from './relatorio.controller.ts';

describe('RelatorionestController', () => {
  let controller: RelatorionestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RelatorionestController],
    }).compile();

    controller = module.get<RelatorionestController>(RelatorionestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

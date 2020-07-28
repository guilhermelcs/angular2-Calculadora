import { TestBed } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  let service: CalculadoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculadoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('deve fazer 3 + 7 = 10', () => {
    let soma = service.calcular(3, 7, CalculadoraService.SOMA);
    expect(soma).toEqual(10)
  });

  it('deve fazer 3 - 7 = -4', () => {
    let subtracao = service.calcular(3, 7, CalculadoraService.SUBTRACAO);
    expect(subtracao).toEqual(-4)
  });
  
  it('deve fazer 3 * 7 = 21', () => {
    let multiplicacao = service.calcular(3, 7, CalculadoraService.MULTIPLICACAO);
    expect(multiplicacao).toEqual(21)
  });

  it('deve fazer 1 / 4 = 0.25', () => {
    let divisao = service.calcular(1, 4, CalculadoraService.DIVISAO);
    expect(divisao).toEqual(0.25)
  });

  it('deve fazer operação invalida retornar 0', () => {
    let inputMismatch = service.calcular(5, 1, '%');
    expect(inputMismatch).toEqual(0)
  });
});

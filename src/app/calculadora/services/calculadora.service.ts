import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {
	
	static readonly SOMA = '+'; 
	static readonly SUBTRACAO = '-'; 
	static readonly MULTIPLICACAO = '*'; 
	static readonly DIVISAO = '/'; 

	constructor() { }

	calcular( num1:number, num2:number, operacao:string ) : number {
		switch( operacao ) {
			case operacao = CalculadoraService.SOMA :
				return num1 + num2;
			case operacao = CalculadoraService.SUBTRACAO :
				return num1 - num2;
			case operacao = CalculadoraService.MULTIPLICACAO :
				return num1 * num2;
			case operacao = CalculadoraService.DIVISAO :
				return num1 / num2;
			default:
				return 0;
		}
	}

}

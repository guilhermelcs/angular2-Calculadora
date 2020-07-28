import { Component, OnInit } from '@angular/core';
import { CalculadoraService } from '../services';

@Component({
	selector: 'app-calculadora',
	templateUrl: './calculadora.component.html',
	styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

	private num1: string;
	private num2: string;
	private operacao: string;
	private resultado: number;

	constructor(private calculadoraService: CalculadoraService) {
	}

	ngOnInit(): void {
		this.limpar();
	}

	limpar(): void {
		this.num1 = '0';
		this.num2 = null;
		this.operacao = null;
		this.resultado = null;
	}

	adicionarNumero(num: string): void {
		if( this.operacao === null ) {
			this.num1 = this.concatenarNum( this.num1, num );
		}
		else {
			this.num2 = this.concatenarNum( this.num2, num );
		}
	}

	concatenarNum( numAtual: string, numConcat: string ): string {
		if( numAtual === '0' || numAtual === null ) {
			numAtual = '';
		}

		if( numConcat === '.' && numAtual === '' ) {
			return '0.';
		}

		if( numConcat === '.' && numAtual.indexOf('.') > -1 ) {
			return numAtual;
		}

		return numAtual + numConcat;
	}

	definirOperacao( operacao: string ): void {
		if( this.operacao === null ) {
			this.operacao = operacao;
			return;
		}

		if( this.num2 !== null ) {
			this.resultado = this.calculadoraService.calcular( 
				parseFloat(this.num1), 
				parseFloat(this.num2), 
				this.operacao
		 	);
			this.operacao = operacao;
			this.num1 = this.resultado.toString();
			this.num2 = null;
			this.resultado = null;
		}
	}

	calcular(): void {
		if( this.num2 === null ) {
			return;
		}
		this.resultado = this.calculadoraService.calcular( 
			parseFloat(this.num1), 
			parseFloat(this.num2), 
			this.operacao 
		);
	}

	get display(): string {
		if( this.resultado !== null ) {
			return this.resultado.toString();
		}
		if( this.num2 !== null ) {
			return this.num2;
		}
		return this.num1;
	}
}

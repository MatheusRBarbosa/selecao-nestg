
	import { Outro } from './outro.dto'
	
	export class AnexoDto  {
		constructor(
		nome: string,
		nomes: string[],
		outro: Outro,
		) {
			this.nome = nome;
			this.nomes = nomes;
			this.outro = outro;
		}
		readonly nome: string;
		readonly nomes: string[];
		readonly outro: Outro;
	}

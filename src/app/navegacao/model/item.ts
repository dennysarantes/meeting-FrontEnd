import { Usuario } from './usuario';
export interface Item {
id : number;
titulo : string;
dataCadastro : string;
descricao : string;
responsavelCadastroC : Usuario;
responsavelC : Usuario;
status : string;
//deliberacoesC : Deliberacao;
//acoesC : Acao;
}

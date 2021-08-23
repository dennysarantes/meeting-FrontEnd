import { Acao } from "./acao";

export interface Deliberacao {

    id : number;
    descricao : string;
    dataLimite : string;
    item : number;
    responsaveis : number[];
    status : string;
    acoes : Acao[];
}

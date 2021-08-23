import { AcaoRascunho } from "./acaoRascunho";

export interface Acao {
      id : number;
      descricao : string;
      dataRegistro : string;
      dataRealizada : string;
      responsavel : number;
      deliberacao : number;
      acaoRascunhoDTO : AcaoRascunho;
}

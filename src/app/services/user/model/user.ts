export interface User {
  sub: string | any;
  nomeCompleto: string;
  username: string;
  email: string;
  localTrabalho: string;
  nome: number;
  perfil: string;
  avatar: Blob;
  iat: number | any;
  exp: number | any;
  qtdReunioes : number;
  dataProximaReuniao : string;
  qtdItensProximaReuniao? : number | any;
  qtdAcoesPendentes : number;
  qtdAcoesAtrasadas : number;
}

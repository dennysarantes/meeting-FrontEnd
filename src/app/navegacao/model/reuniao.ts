export interface Reuniao {
  id: number;
  titulo: string;
  dataCadastro: string;
  dataAgendamento: string;
  horarioAgendamento: string;
  duracao: string;
  local: string;
  statusReuniao: string;
  participantes: number[];
  itens: number[];
}

import { Deliberacao } from './../../navegacao/model/deliberacao';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from '../token/token.service';

@Injectable({
  providedIn: 'root'
})
export class TarefasService {

  qtdTarefasAtrasadas : number = 0;
  qtdTarefasPendentes : number = 0;
  tipoDuvida : string = '';
  tarefaTemp! : Deliberacao;
  token! : string;
  url : string = 'http://localhost:8080/';

  constructor(private httpClient : HttpClient,
              private tokenService : TokenService) {

                this.token = this.tokenService.getToken();

               }

  carregarTarefasPendentes(){
    return this.httpClient.get(
      'http://localhost:8080/api/deliberacao/pendentes',
      {headers: {"Authorization" : "Bearer " + this.token}});
  }

  carregarTarefasAtrasadas() {
    return this.httpClient.get(
          'http://localhost:8080/api/deliberacao/atrasadas',
          {headers: {"Authorization" : "Bearer " + this.token}});
}

  carregarTarefasConcluidas(){
    return this.httpClient.get(
      'http://localhost:8080/api/deliberacao/concluidas',
      {headers: {"Authorization" : "Bearer " + this.token}});
  }

  guardaQtdTarefasPendentes(qtdTarefasPendentes : number){
    this.qtdTarefasPendentes= qtdTarefasPendentes;
  }

  getQtdTarefasPendentes(){
    return this.qtdTarefasPendentes;
  }

  guardaQtdTarefasAtrasadas(qtdTarefasAtrasadas : number){
    this.qtdTarefasAtrasadas = qtdTarefasAtrasadas;

  }

  getQtdTarefasAtrasadas(){
    return this.qtdTarefasAtrasadas;
  }

  guardaTarefaTemp(tarefa : Deliberacao){
      this.tarefaTemp = tarefa;
  }

  getTarefaTemp(){
    return this.tarefaTemp;
  }

  guardaTipoDuvida(tipo : string) {
    this.tipoDuvida = tipo;
  }

  getTipoDuvida(){
    return this.tipoDuvida;
  }

}

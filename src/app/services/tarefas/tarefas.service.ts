import { Deliberacao } from './../../navegacao/model/deliberacao';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from '../token/token.service';

@Injectable({
  providedIn: 'root'
})
export class TarefasService {

  qtdTarefasAtrasadas : number = 0;
  tarefaTemp! : Deliberacao;
  token! : string;
  url : string = 'http://localhost:8080/';

  constructor(private httpClient : HttpClient,
              private tokenService : TokenService) {

                this.token = this.tokenService.getToken();

               }

  carregarTarefasAtrasadas() {
    return this.httpClient.get(
          'http://localhost:8080/api/deliberacao/atrasadas',
          {headers: {"Authorization" : "Bearer " + this.token}});
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

}

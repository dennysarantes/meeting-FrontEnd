import { Confirmacao } from './../../navegacao/model/confirmacao';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reuniao } from 'src/app/navegacao/model/reuniao';
import { TokenService } from '../token/token.service';
import { UserService } from '../user/service/user.service';

@Injectable({
  providedIn: 'root'
})
export class ConfirmacaoService {

  token! : string;
  url : string = 'http://localhost:8080/';

  constructor(private httpClient : HttpClient,
              private userService : UserService,
              private tokenService : TokenService) {

                this.token = this.tokenService.getToken();

               }

  atualizaConfirmacao(idReuniao : number, confirmacao : Confirmacao) {
        return this.httpClient.put(
              'http://localhost:8080/api/confirmacao/' + idReuniao, confirmacao,
              {headers: {"Authorization" : "Bearer " + this.token}});
  }

  atualizaConfirmacaoNull(idReuniao : number) {
    return this.httpClient.get(
          'http://localhost:8080/api/confirmacao/' + idReuniao,
          {headers: {"Authorization" : "Bearer " + this.token}});
}

}

import { Reuniao } from './../../navegacao/model/reuniao';
import { TokenService } from './../token/token.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from '../user/service/user.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReuniaoService {
  token! : string;
  url : string = 'http://localhost:8080/';

  constructor(private httpClient : HttpClient,
              private userService : UserService,
              private tokenService : TokenService) {

                this.token = this.tokenService.getToken();

               }

  carregarProximasReunioesSemPaginacao() : Observable<Reuniao>{

    return this.httpClient.get<Reuniao>(
                  this.url + 'api/reuniao/user-yet-prox',
                  {headers: {"Authorization" : "Bearer " + this.token}})
  }

  carregarAntigasReunioesSemPaginacao() : Observable<Reuniao>{
    //let token = this.tokenService.getToken();
    return this.httpClient.get<Reuniao>(
                  this.url + 'api/reuniao/user-yet-antigas',
                  {headers: {"Authorization" : "Bearer " + this.token}})
  }

  carregarProximasReunioesNotUserSemPaginacao() : Observable<Reuniao>{
    let token = this.tokenService.getToken();
    return this.httpClient.get<Reuniao>(
                  this.url + 'api/reuniao/proximasnouser',
                  {headers: {"Authorization" : "Bearer " + this.token}})
  }

}



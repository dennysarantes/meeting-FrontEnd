import { Reuniao } from './../../navegacao/model/reuniao';
import { TokenService } from './../token/token.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from '../user/service/user.service';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/navegacao/model/usuario';

@Injectable({
  providedIn: 'root'
})
export class ReuniaoService {

  token! : string;
  url : string = 'http://localhost:8080/';
  minhasReunioes! : Reuniao[];
  proximasReunioesNoUser ! : Reuniao[];

  constructor(private httpClient : HttpClient,
              private userService : UserService,
              private tokenService : TokenService) {

                this.token = this.tokenService.getToken();

               }

  guardarProximasReunioesNoUser( reunioes : Reuniao[]){
    this.proximasReunioesNoUser = reunioes;
  }

  getProximasReunioesNoUser(){
    return this.proximasReunioesNoUser;
  }

  guardarMinhasReunioes(reunioes : Reuniao[]){
      this.minhasReunioes = reunioes;
  }

  getMinhasReunioes(){
    return this.minhasReunioes;
  }

  carregarProximasReunioesSemPaginacao() : Observable<Reuniao>{

    return this.httpClient.get<Reuniao>(
                  this.url + 'api/reuniao/user-yet-prox-test',
                  {headers: {"Authorization" : "Bearer " + this.token}})
  }

  carregarAntigasReunioesSemPaginacao() : Observable<Reuniao>{
    //let token = this.tokenService.getToken();
    return this.httpClient.get<Reuniao>(
                  this.url + 'api/reuniao/user-yet-antigas',
                  {headers: {"Authorization" : "Bearer " + this.token}})
  }

  carregarProximasReunioesMenosAtual(idReuniao: number) :  Observable<Reuniao>{
    //et token = this.tokenService.getToken();
    return this.httpClient.get<Reuniao>(
                  this.url + 'api/reuniao/proximas/' + idReuniao,
                  {headers: {"Authorization" : "Bearer " + this.token}})

  }

  carregarProximasReunioesNotUserSemPaginacao() : Observable<Reuniao>{
    let token = this.tokenService.getToken();
    return this.httpClient.get<Reuniao>(
                  this.url + 'api/reuniao/proximasnouser',
                  {headers: {"Authorization" : "Bearer " + this.token}})
  }

  carregarParticipantesByIdReuniao(idReuniao : number) :  Observable<Usuario>{
    let token = this.tokenService.getToken();
    return this.httpClient.get<Usuario>(
                  this.url + 'api/reuniao/participantes/' + idReuniao,
                  {headers: {"Authorization" : "Bearer " + this.token}})

  }

  removerUsuarioReuniao(idReuniao: number, idUsuario: number, idConfirmacao : number) {
    let token = this.tokenService.getToken();
    return this.httpClient.put(
                  this.url + 'api/reuniao/retiraruser/' + idReuniao + '/' + idUsuario + '/' + idConfirmacao,{},
                  {headers: {"Authorization" : "Bearer " + this.token}})
  }
}



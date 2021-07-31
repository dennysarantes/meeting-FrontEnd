import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from '../token/token.service';
import { UserService } from '../user/service/user.service';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  token! : string;
  url : string = 'http://localhost:8080/';
  idReuniaoDoItemSelecionado! : number;

  constructor(private httpClient : HttpClient,
              private userService : UserService,
              private tokenService : TokenService) {
                this.token = this.tokenService.getToken();
               }

  guardarIdReuniao(id : number) {
    this.idReuniaoDoItemSelecionado = id;
  }

  getIdReuniao() : number{
    return this.idReuniaoDoItemSelecionado;
  }

}

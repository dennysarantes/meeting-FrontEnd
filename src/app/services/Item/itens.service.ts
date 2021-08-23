import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from 'src/app/navegacao/model/item';
import { TokenService } from '../token/token.service';
import { UserService } from '../user/service/user.service';

@Injectable({
  providedIn: 'root'
})
export class ItensService {

  itemTemp! : Item;
  token! : string;
  url : string = 'http://localhost:8080/';

  constructor(private httpClient : HttpClient,
              private userService : UserService,
              private tokenService : TokenService) {

                this.token = this.tokenService.getToken();

               }

  guardaItemTemp(item : Item){
      this.itemTemp = item;
  }

  getItemTemp(){
    return this.itemTemp;
  }

  carregarItensPorReuniao(idReuniao : number) : Observable<Item>{

    return this.httpClient.get<Item>(
                  this.url + 'api/item/reuniao/' + idReuniao,
                  {headers: {"Authorization" : "Bearer " + this.token}})
  }

  carregarItemPorIdItem(idItem : number) : Observable<Item>{

    return this.httpClient.get<Item>(
                  this.url + 'api/item/' + idItem,
                  {headers: {"Authorization" : "Bearer " + this.token}})
  }


  excluirItemPorReuniao(idReuniao : number, idItem : number){
    return this.httpClient.delete<Item>(
                    this.url + 'api/item/' + idReuniao + '/' + idItem,
                    {headers: {"Authorization" : "Bearer " + this.token}})
  }

}

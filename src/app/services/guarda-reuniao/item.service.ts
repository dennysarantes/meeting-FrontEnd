import { EditItem } from './../../navegacao/model/editItem';
import { NewItem } from './../../navegacao/model/newItem';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from '../token/token.service';
import { UserService } from '../user/service/user.service';
import { Item } from 'src/app/navegacao/model/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  itemTemp! : Item;
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

  guardaItemTemp(item : Item){
    this.itemTemp = item;
  }

  getItemTemp() : Item{
    return this.itemTemp;
  }


  cadastraNovoItem(newItem : NewItem, idReuniao : number){
    const token = this.tokenService.getToken();
    return this.httpClient.post('http://localhost:8080/api/item/modal/' + idReuniao,
                                 newItem,
                                 {headers: {"Authorization" : "Bearer " + token}});
  }

  editarItem(editItem : EditItem, idItem : number){
    const token = this.tokenService.getToken();
    return this.httpClient.put('http://localhost:8080/api/item/editar/' + idItem,
                                  editItem,
                                 {headers: {"Authorization" : "Bearer " + token}});
  }

}

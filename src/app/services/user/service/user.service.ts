import { NewUser } from './../../../navegacao/model/newUser';
import { BehaviorSubject, Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import * as jwt_decode from 'jwt-decode'
import { User } from '../model/user';
import { HttpClient } from '@angular/common/http';
import { TokenService } from '../../token/token.service';
import { Usuario } from 'src/app/navegacao/model/usuario';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  private userName : string = '';
  private userSubject = new BehaviorSubject<User>(null!); //Isso é um Observable do tipo User

constructor(private tokenService : TokenService,
            private httpClient : HttpClient) {
  if(this.tokenService.hasToken()){
      this.decoteAndNotifica();
  }
 }

setToken(token : string){
  this.tokenService.setToken(token);
  this.decoteAndNotifica();
}

getUser(){
  return this.userSubject.asObservable();
}

setUser(user : User){
  this.userSubject.next(user);
}

getUserName(){
  return this.userName;
}

private decoteAndNotifica(){

  const token = this.tokenService.getToken();
  const user = jwt_decode.default(token) as User; //Já é sabido que dentro do token tem um User
  this.userName = user.username;
  this.userSubject.next(user);

  }

  logout(){

    this.tokenService.removeToken();
    this.userSubject.next(null!);
  }

  usuarioEstaLogado() : boolean{
    return !!this.tokenService.hasToken()
  }

  verificaUserName(){
    //implementar...
  }

  registraUsuario(newUser : NewUser){

    const token = this.tokenService.getToken();

    return this.httpClient.post('http://localhost:8080/api/usuario', newUser, {headers: {"Authorization" : "Bearer " + token}});
  }

}

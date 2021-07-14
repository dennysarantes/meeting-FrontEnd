import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Injectable, Injector } from "@angular/core";
import { tap } from 'rxjs/operators'
import { Token } from '../token/model/token';
import { UserService } from '../user/service/user.service';


const API_URL = 'http://localhost:8080'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authToken: string | any;

  constructor(
               private userService : UserService,
               private httpClient : HttpClient
               //private injector: Injector
              ) { }

  OnInit(){

  }

  /* get http() {
    return this.injector.get(HttpClient);
  } */

   authenticate(userName: string , password: string){


    console.log('tentando autenticar...');
       let headers = new HttpHeaders();
        //headers.set('Access-Control-Allow-Origin', 'http://localhost:4200');
        //headers.set('observe', 'response')
       return this.httpClient
        .post(API_URL + '/autenticacao',
                {username : userName, password: password},
                {/* headers : headers,  */ observe: 'response' }
                //{observe: 'response'}
                )
        .pipe(tap(res =>{
            //const token = res.headers.get('x-access-token');
             const token = res.body as Token;
            this.userService.setToken(token.token!);
        }))
  }




}

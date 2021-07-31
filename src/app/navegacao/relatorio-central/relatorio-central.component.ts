import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { ReuniaoService } from 'src/app/services/reuniao/reuniao.service';
import { User } from 'src/app/services/user/model/user';
import { UserService } from 'src/app/services/user/service/user.service';
import { Reuniao } from '../model/reuniao';

@Component({
  selector: 'app-relatorio-central',
  templateUrl: './relatorio-central.component.html',
  styleUrls: ['./relatorio-central.component.css']
})
export class RelatorioCentralComponent implements OnInit {

  user$! : Observable<User>;
  user!: User;
  encapsulation! : ViewEncapsulation.None;
  proximasReunioesList : User[] = []

  constructor(private userService : UserService,
     private reuniaoService : ReuniaoService) {
    this.user$ =  userService.getUser();
    this.user$.subscribe(user => this.user = user);
   }

  ngOnInit() {

    this.reuniaoService.carregarProximasReunioesSemPaginacao()
    .subscribe((reunioes : Reuniao[] | any) => {
          this.proximasReunioesList = reunioes;
    });
  }



}

import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
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

  @Input() qtdTeste : number = 0;

  user$! : Observable<User>;
  user!: User;
  encapsulation! : ViewEncapsulation.None;
  proximasReunioesList : User[] = []
  qtdMinhasTarefas : number = 0;

  constructor(private userService : UserService,
              private reuniaoService : ReuniaoService) {
              this.user$ =  userService.getUser();
              this.user$.subscribe(user => this.user = user);
              this.carregaQtdReunioes();
              this.carregaQtdTarefasAtrasadas();

   }

  ngOnInit() {

  }

  carregaQtdReunioes(){
    this.reuniaoService.carregarProximasReunioesSemPaginacao()
    .subscribe((reunioes : Reuniao[] | any) => {
          this.proximasReunioesList = reunioes;
          this.qtdTeste = this.proximasReunioesList.length;
    });
  }

  carregaQtdTarefasAtrasadas(){
    this.qtdMinhasTarefas = this.user.qtdAcoesAtrasadas;
  }

  onMudouValorReunioes(event : any){
        this.proximasReunioesList.length = event.novoValor;
  }
}

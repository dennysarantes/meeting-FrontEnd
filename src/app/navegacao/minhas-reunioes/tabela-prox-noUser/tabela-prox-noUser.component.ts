import { ItemService } from './../../../services/guarda-reuniao/item.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ReuniaoService } from 'src/app/services/reuniao/reuniao.service';
import { User } from 'src/app/services/user/model/user';
import { UserService } from 'src/app/services/user/service/user.service';
import { ModalItensComponent } from '../../modal-itens/modal-itens.component';
import { Reuniao } from '../../model/reuniao';

@Component({
  selector: 'app-tabela-prox-noUser',
  templateUrl: './tabela-prox-noUser.component.html',
  styleUrls: ['./tabela-prox-noUser.component.css']
})
export class TabelaProxNoUserComponent implements OnInit {

  user$! : Observable<User>;
  user!: User;
  proximasReunioesNotUserList : Reuniao[] = [];


  displayedColumnsProximasNotUser: string[] =
                                ['data',
                                 'titulo',
                                 'local',
                                 'itens',
                                 'participantes',
                                 'solicitar',
                                 'pauta'];


  constructor(private itemService : ItemService,
    private reuniaoService : ReuniaoService,
    public dialog: MatDialog,
    private userService : UserService) {
      this.user$ =  userService.getUser();
      this.user$.subscribe(user => this.user = user);
    }

  ngOnInit() {
     //Monta a lista de próximas reuniões que não consta o usuário
     this.reuniaoService.carregarProximasReunioesNotUserSemPaginacao()
     .subscribe((reunioes : Reuniao[] | any) => {
           this.proximasReunioesNotUserList = reunioes;
     });
  }

 openDialog(idReuniao : number) {

    this.itemService.guardarIdReuniao(idReuniao);
    const dialogRef = this.dialog.open(ModalItensComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ItemService } from 'src/app/services/guarda-reuniao/item.service';
import { ReuniaoService } from 'src/app/services/reuniao/reuniao.service';
import { User } from 'src/app/services/user/model/user';
import { UserService } from 'src/app/services/user/service/user.service';
import { ModalItensComponent } from '../../modal-itens/modal-itens.component';
import { Reuniao } from '../../model/reuniao';

@Component({
  selector: 'app-tabela-prox',
  templateUrl: './tabela-prox.component.html',
  styleUrls: ['./tabela-prox.component.css']
})
export class TabelaProxComponent implements OnInit {

  user$! : Observable<User>;
  user!: User;
  proximasReunioesList : Reuniao[] = [];
  clickedRows = new Set<Reuniao>();

  displayedColumnsProximasReunioes: string[] =
  ['data',
   'titulo',
   'local',
   'itens',
   'participantes',
   'confirmar',
   'rejeitar',
   'pauta'];

    constructor(
          private reuniaoService : ReuniaoService,
          public dialog: MatDialog,
          private userService : UserService,
          private itemService : ItemService)
          {
              this.user$ =  userService.getUser();
              this.user$.subscribe(user => this.user = user);
          }

  ngOnInit() {
    //Monta a lista de próximas reuniões do usuário
    this.reuniaoService.carregarProximasReunioesSemPaginacao()
    .subscribe((reunioes : Reuniao[] | any) => {
          this.proximasReunioesList = reunioes;
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

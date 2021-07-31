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
  selector: 'app-tabela-antigas',
  templateUrl: './tabela-antigas.component.html',
  styleUrls: ['./tabela-antigas.component.css']
})
export class TabelaAntigasComponent implements OnInit {

  user$! : Observable<User>;
  user!: User;
  antigasReunioesList : Reuniao[] = [];





    displayedColumnsAntigas: string[] =
                                ['data',
                                 'titulo',
                                 'local',
                                 'itens',
                                 'participantes',
                                 'ata'];

  constructor(private itemService : ItemService,
    private reuniaoService : ReuniaoService,
    public dialog: MatDialog,
    private userService : UserService) {
      this.user$ =  userService.getUser();
      this.user$.subscribe(user => this.user = user);
    }

  ngOnInit() {



    //Monta a lista de antigas reuniões do usuário
    this.reuniaoService.carregarAntigasReunioesSemPaginacao()
    .subscribe((reunioes : Reuniao[] | any) => {
          this.antigasReunioesList = reunioes;
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

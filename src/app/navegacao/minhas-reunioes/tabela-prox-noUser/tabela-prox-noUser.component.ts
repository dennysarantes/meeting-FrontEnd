import { ItemService } from './../../../services/guarda-reuniao/item.service';
import { Component, Input, OnInit, ViewChild, OnChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ReuniaoService } from 'src/app/services/reuniao/reuniao.service';
import { UserService } from 'src/app/services/user/service/user.service';
import { ModalItensComponent } from '../../modal-itens/modal-itens.component';
import { Reuniao } from '../../model/reuniao';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { ModalParticipantesComponent } from '../../modal-participantes/modal-participantes.component';

@Component({
  selector: 'app-tabela-prox-noUser',
  templateUrl: './tabela-prox-noUser.component.html',
  styleUrls: ['./tabela-prox-noUser.component.css']
})
export class TabelaProxNoUserComponent implements OnInit {

  @Input() qtdReuniao! : any;


  proximasReunioesNotUserList : Reuniao[] = [];
  dataSource!: MatTableDataSource<Reuniao>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


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
      //Monta a lista de próximas reuniões que não consta o usuário
      this.reuniaoService.carregarProximasReunioesNotUserSemPaginacao()
      .subscribe((reunioes : Reuniao[] | any) => {
            this.proximasReunioesNotUserList = reunioes;
            this.dataSource = new MatTableDataSource(this.proximasReunioesNotUserList);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
            this.reuniaoService.guardarProximasReunioesNoUser(this.proximasReunioesNotUserList);
      });
        }

  ngOnInit() {
  }

  ngOnChanges(){
      this.onMudouValorIrmao(this.qtdReuniao);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

 openDialog(idReuniao : number) {

    this.itemService.guardarIdReuniao(idReuniao);
    const dialogRef = this.dialog.open(ModalItensComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  abreModalParticipantes(idReuniao : number) {

    this.itemService.guardarIdReuniao(idReuniao);
    const dialogRef = this.dialog.open(ModalParticipantesComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  static addReuniaoDinamica(){
    console.log('entrou na outra classe')
  }

  onMudouValorIrmao(event : any){
    //this.proximasReunioesList.length = reunioes;
     console.log('Pegando o evento no componente irmão....');
     console.log(event);
     //this.aoMudar.emit({novoValor : event.novoValor});
     this.reuniaoService.carregarProximasReunioesNotUserSemPaginacao()
      .subscribe((reunioes : Reuniao[] | any) => {
            this.proximasReunioesNotUserList = reunioes;
            this.dataSource = new MatTableDataSource(this.proximasReunioesNotUserList);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
            this.reuniaoService.guardarProximasReunioesNoUser(this.proximasReunioesNotUserList);
      });
}


}

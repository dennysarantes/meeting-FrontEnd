import { ConfirmacaoService } from './../../../services/confirmacao/confirmacao.service';
import { Confirmacao } from './../../model/confirmacao';
import { Router } from '@angular/router';
import { ModalParticipantesComponent } from './../../modal-participantes/modal-participantes.component';
import { Component, AfterViewInit, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { ItemService } from 'src/app/services/guarda-reuniao/item.service';
import { ReuniaoService } from 'src/app/services/reuniao/reuniao.service';
import { User } from 'src/app/services/user/model/user';
import { UserService } from 'src/app/services/user/service/user.service';
import { ModalItensComponent } from '../../modal-itens/modal-itens.component';
import { Reuniao } from '../../model/reuniao';
import { TabelaProxNoUserComponent } from '../tabela-prox-noUser/tabela-prox-noUser.component';
import { RelatorioCentralComponent } from '../../relatorio-central/relatorio-central.component';
import { ConfirmationService } from 'primeng/api';
import {MatPaginatorIntl, MatPaginatorModule} from '@angular/material/paginator';
import {Subject} from 'rxjs';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-tabela-prox',
  templateUrl: './tabela-prox.component.html',
  styleUrls: ['./tabela-prox.component.css']
})
export class TabelaProxComponent implements OnInit {

  @Output() aoRejeitar = new EventEmitter<any>();

  proximasReunioesList : Reuniao[] = [];
  user$! : Observable<User>;
  user!: User;
  userNext! : User;
  previousPageLabel = 'Anterior';
  checkedcheckedConfirmacao = false;
  color: ThemePalette = 'primary';

  dataSource!: MatTableDataSource<Reuniao>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


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
          private itemService : ItemService,
          private userService : UserService,
          private confirmacaoService : ConfirmacaoService,
          private router : Router,
          private confirmationService: ConfirmationService)
          {

            this.user$ =  userService.getUser();
            this.user$.subscribe(user => this.user = user);

              this.reuniaoService.carregarProximasReunioesSemPaginacao()
              .subscribe((reunioes : Reuniao[] | any) => {
                    this.proximasReunioesList = reunioes;
                    this.dataSource = new MatTableDataSource(this.proximasReunioesList);
                    this.dataSource.paginator = this.paginator;
                    this.dataSource.sort = this.sort;
                    reuniaoService.guardarMinhasReunioes(this.proximasReunioesList);
                  });

          }

  ngOnInit() {}

  ngAfterViewInit() {}

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

    TabelaProxNoUserComponent.addReuniaoDinamica();

    this.itemService.guardarIdReuniao(idReuniao);
    const dialogRef = this.dialog.open(ModalParticipantesComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  rejeitar(reuniaoTela : Reuniao, event: Event, confirmacao : Confirmacao) {

    if(reuniaoTela.participantes.length == 1){
      alert('Você é o único participante dessa reunião.')
    }else{

    this.confirmationService.confirm({
      target: event.target!,
      message: 'Seu nome será excluído desta reunião. Deseja continuar?',
      acceptLabel : 'Sim',
      rejectLabel: 'Não',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.reuniaoService.removerUsuarioReuniao(reuniaoTela.id, this.user.sub, confirmacao.id)
        .subscribe( () =>
          this.atualizaDados()
        //console.log(`O usuario de id: ${this.user.sub} foi excluido da reunião id ${idReuniao}...`)
        );
      },
      reject: () => {
      }
  });
}

  }

  atualizarStatus(confirmacao : Confirmacao, idReuniao : number){
    console.log('mudou!');
      this.confirmacaoService.atualizaConfirmacao(idReuniao, confirmacao)
      .subscribe(() =>{
        this.reuniaoService.carregarProximasReunioesSemPaginacao()
        .subscribe((reunioes : Reuniao[] | any) => {
              this.proximasReunioesList = reunioes;
              this.dataSource = new MatTableDataSource(this.proximasReunioesList);
              this.dataSource.paginator = this.paginator;
              this.dataSource.sort = this.sort;
              this.reuniaoService.guardarMinhasReunioes(this.proximasReunioesList);
            });
      });

  }

  atualizaDados(){
    this.reuniaoService.carregarProximasReunioesSemPaginacao()
    .subscribe((reunioes : Reuniao[] | any) => {
          this.proximasReunioesList = reunioes;
          this.dataSource = new MatTableDataSource(this.proximasReunioesList);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
          this.reuniaoService.guardarMinhasReunioes(this.proximasReunioesList);
        });
        this.aoRejeitar.emit({novoValor : this.proximasReunioesList.length -1 });
  }
}



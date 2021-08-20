import { TarefasService } from './../../../services/tarefas/tarefas.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ItemService } from 'src/app/services/guarda-reuniao/item.service';
import { UserService } from 'src/app/services/user/service/user.service';
import { Deliberacao } from '../../model/deliberacao';
import { Reuniao } from '../../model/reuniao';
import { ModalDetalhesTarefaComponent } from '../../modal-detalhes-tarefa/modal-detalhes-tarefa.component';

@Component({
  selector: 'app-tarefas-atrasadas',
  templateUrl: './tarefas-atrasadas.component.html',
  styleUrls: ['./tarefas-atrasadas.component.css']
})
export class TarefasAtrasadasComponent implements OnInit {

  deliberacoesAtrasadas : Deliberacao[] = [];

  dataSource!: MatTableDataSource<Deliberacao>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  displayedColumnsTarefasAtraso: string[] =
  ['index',
   'dataLimite',
   'status',
   'descricao',
   'detalhes',
   'incluirAcao'
   ];


  constructor(
    public dialog: MatDialog,
    private itemService : ItemService,
    private userService : UserService,
    private tarefasService : TarefasService,
    ) {
      this.atualizarDadosNaTela();

    }

  ngOnInit() {
  }

  atualizarDadosNaTela(){
    this.tarefasService.carregarTarefasAtrasadas()
    .subscribe((tarefas : Deliberacao[] | any) => {
          this.deliberacoesAtrasadas = tarefas;
          this.dataSource = new MatTableDataSource(this.deliberacoesAtrasadas);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
          this.tarefasService.guardaQtdTarefasAtrasadas(this.deliberacoesAtrasadas.length);
        });


  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  abrirModalDetalhesTarefa(tarefa : Deliberacao){

      this.tarefasService.guardaTarefaTemp(tarefa);
      const dialogRef = this.dialog.open(ModalDetalhesTarefaComponent);

      /* dialogRef.afterClosed().subscribe(result => {
      console.log('teste');
      } */

  }

  abrirModalIncluirAcao(tarefa : Deliberacao) {
      console.log('cadastro de acao...')
  }
}

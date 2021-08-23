import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ItemService } from 'src/app/services/guarda-reuniao/item.service';
import { ItensService } from 'src/app/services/Item/itens.service';
import { TarefasService } from 'src/app/services/tarefas/tarefas.service';
import { UserService } from 'src/app/services/user/service/user.service';
import { ModalDetalhesTarefaComponent } from '../../modal-detalhes-tarefa/modal-detalhes-tarefa.component';
import { Deliberacao } from '../../model/deliberacao';

@Component({
  selector: 'app-tarefas-concluidas',
  templateUrl: './tarefas-concluidas.component.html',
  styleUrls: ['./tarefas-concluidas.component.css']
})
export class TarefasConcluidasComponent implements OnInit {

  deliberacoesConcluidas : Deliberacao[] = [];
  dataSource!: MatTableDataSource<Deliberacao>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  displayedColumnsTarefasAtraso: string[] =
  ['index',
   'dataLimite',
   'dataConclusao',
   'status',
   'descricao',
   'detalhes'
   ];


  constructor(
    public dialog: MatDialog,
    private itemService : ItemService,
    private userService : UserService,
    private tarefasService : TarefasService,
    private itensService : ItensService
    ) {
      this.atualizarDadosNaTela();
    }


  ngOnInit() {
  }

  atualizarDadosNaTela(){
    this.tarefasService.carregarTarefasConcluidas()
    .subscribe((tarefas : Deliberacao[] | any) => {
          this.deliberacoesConcluidas = tarefas;
          this.dataSource = new MatTableDataSource(this.deliberacoesConcluidas);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
          this.tarefasService.guardaQtdTarefasPendentes(this.deliberacoesConcluidas.length);
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

    this.itensService.carregarItemPorIdItem(tarefa.item)
    .subscribe( item => {
      this.itemService.guardaItemTemp(item)
      this.tarefasService.guardaTarefaTemp(tarefa);
      const dialogRef = this.dialog.open(ModalDetalhesTarefaComponent);
    });


    /* dialogRef.afterClosed().subscribe(result => {
    console.log('teste');
    } */
  }

  abrirModalIncluirAcao(tarefa : Deliberacao) {
    console.log('Vendo acao...')

    console.log(tarefa.acoes[0].descricao);
}


}

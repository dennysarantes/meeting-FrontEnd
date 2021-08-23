import { ItensService } from 'src/app/services/Item/itens.service';
import { ModalDuvidaComponent } from './../minhas-tarefas/modal-duvida/modal-duvida.component';
import { TarefasService } from './../../services/tarefas/tarefas.service';
import { Deliberacao } from './../model/deliberacao';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Item } from '../model/item';
import { ItemService } from 'src/app/services/guarda-reuniao/item.service';

@Component({
  selector: 'app-modal-detalhes-tarefa',
  templateUrl: './modal-detalhes-tarefa.component.html',
  styleUrls: ['./modal-detalhes-tarefa.component.css']
})
export class ModalDetalhesTarefaComponent implements OnInit {

  tarefa! : Deliberacao;
  item! : Item;


  constructor(private tarefasService : TarefasService,
    private itensService : ItensService,
    private itemService : ItemService,
    public dialog: MatDialog) {
    this.tarefa = tarefasService.getTarefaTemp();
    this.carregarItem();
   }

  ngOnInit() {

  }
  carregarItem(){
    this.item =  this.itemService.getItemTemp();
  }

  abrirModalDuvida(tipo : string){
    this.tarefasService.guardaTipoDuvida(tipo);
    const dialogRef = this.dialog.open(ModalDuvidaComponent);
  }
}

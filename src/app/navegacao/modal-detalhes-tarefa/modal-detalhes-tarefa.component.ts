import { TarefasService } from './../../services/tarefas/tarefas.service';
import { Deliberacao } from './../model/deliberacao';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-detalhes-tarefa',
  templateUrl: './modal-detalhes-tarefa.component.html',
  styleUrls: ['./modal-detalhes-tarefa.component.css']
})
export class ModalDetalhesTarefaComponent implements OnInit {

  tarefa! : Deliberacao;

  constructor(private tarefasService : TarefasService) {
    this.tarefa = tarefasService.getTarefaTemp();
   }

  ngOnInit() {
  }

}

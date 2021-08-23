import { TarefasService } from './../../../services/tarefas/tarefas.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-duvida',
  templateUrl: './modal-duvida.component.html',
  styleUrls: ['./modal-duvida.component.css']
})
export class ModalDuvidaComponent implements OnInit {

  tipoDuvida : string = '';

  constructor(private tarefasService : TarefasService) {
    this.tipoDuvida = this.tarefasService.getTipoDuvida();
   }

  ngOnInit() {
  }

}

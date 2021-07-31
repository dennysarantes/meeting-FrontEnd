import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/guarda-reuniao/item.service';

@Component({
  selector: 'app-modal-itens',
  templateUrl: './modal-itens.component.html',
  styleUrls: ['./modal-itens.component.css']
})
export class ModalItensComponent implements OnInit {

  idReuniaoTemp! : number;

  constructor(private itemService : ItemService) { }

  ngOnInit() {
    this.idReuniaoTemp =  this.itemService.getIdReuniao();
  }

}

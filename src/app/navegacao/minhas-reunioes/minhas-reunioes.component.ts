import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-minhas-reunioes',
  templateUrl: './minhas-reunioes.component.html',
  styleUrls: ['./minhas-reunioes.component.css']
})
export class MinhasReunioesComponent implements OnInit {

  @Input() qReunioes! : number;
  @Output() aoMudar = new EventEmitter<any>();

  valor : any;

  constructor(){}

  ngOnInit() {

  }

  onMudouValor(event : any){
    //this.proximasReunioesList.length = reunioes;
     console.log(event);
     this.aoMudar.emit({novoValor : event.novoValor});

      this.valor = event;
}

}

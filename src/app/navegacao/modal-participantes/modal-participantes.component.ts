import { ReuniaoService } from 'src/app/services/reuniao/reuniao.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from '../model/usuario';
import { ItemService } from 'src/app/services/guarda-reuniao/item.service';

@Component({
  selector: 'app-modal-participantes',
  templateUrl: './modal-participantes.component.html',
  styleUrls: ['./modal-participantes.component.css']
})
export class ModalParticipantesComponent implements OnInit {

  idReuniaoTemp! : number;
  participantesList : Usuario[] = [];

  dataSource!: MatTableDataSource<Usuario>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  displayedColumnsItens: string[] =
  ['nome',
   'local',
   'telefone'];


  constructor(private _snackBar: MatSnackBar,
    private reuniaoService : ReuniaoService,
    private itemService : ItemService) {

      this.idReuniaoTemp =  this.itemService.getIdReuniao();
      this.reuniaoService.carregarParticipantesByIdReuniao(this.idReuniaoTemp)
      .subscribe((participantes : Usuario[] | any) => {
        this.participantesList = participantes;
        this.dataSource = new MatTableDataSource(this.participantesList);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });

     }



  ngOnInit() {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}

import { TabelaProxNoUserComponent } from './../tabela-prox-noUser/tabela-prox-noUser.component';
import { ItemService } from './../../../services/guarda-reuniao/item.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ReuniaoService } from 'src/app/services/reuniao/reuniao.service';
import { User } from 'src/app/services/user/model/user';
import { UserService } from 'src/app/services/user/service/user.service';
import { ModalItensComponent } from '../../modal-itens/modal-itens.component';
import { Reuniao } from '../../model/reuniao';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-tabela-antigas',
  templateUrl: './tabela-antigas.component.html',
  styleUrls: ['./tabela-antigas.component.css']
})
export class TabelaAntigasComponent implements OnInit {

  antigasReunioesList : Reuniao[] = [];

  dataSource!: MatTableDataSource<Reuniao>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;





    displayedColumnsAntigas: string[] =
                                ['data',
                                 'titulo',
                                 'local',
                                 'ata'];

  constructor(private itemService : ItemService,
    private reuniaoService : ReuniaoService,
    public dialog: MatDialog,
    private userService : UserService) {
      //Monta a lista de antigas reuniões do usuário
      this.reuniaoService.carregarAntigasReunioesSemPaginacao()
      .subscribe((reunioes : Reuniao[] | any) => {
            this.antigasReunioesList = reunioes;
            this.dataSource = new MatTableDataSource(this.antigasReunioesList);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
      });

    }

  ngOnInit() {}

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

}

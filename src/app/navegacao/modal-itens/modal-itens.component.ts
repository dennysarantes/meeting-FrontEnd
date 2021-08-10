import { UserService } from './../../services/user/service/user.service';
import { ModalNovoItemComponent } from './../modal-novo-item/modal-novo-item.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ItemService } from 'src/app/services/guarda-reuniao/item.service';
import { ItensService } from 'src/app/services/Item/itens.service';
import { Item } from '../model/item';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { User } from 'src/app/services/user/model/user';
import { ConfirmationService } from 'primeng/api';
import { ModalEditarItemComponent } from '../modal-editar-item/modal-editar-item.component';



@Component({
  selector: 'app-modal-itens',
  templateUrl: './modal-itens.component.html',
  styleUrls: ['./modal-itens.component.css']
})
export class ModalItensComponent implements OnInit {

  durationInSeconds = 5;
  idReuniaoTemp! : number;
  itensList : Item[] = [];
  contador : number = 0;
  user$! : Observable<User>;
  user!: User;

  dataSource!: MatTableDataSource<Item>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  displayedColumnsItens: string[] =
  ['id',
   'titulo',
   'responsavel',
   'detalhes',
   'editar',
   'excluir'];


  constructor(private itemService : ItemService,
    private itensService : ItensService,
    private _snackBar: MatSnackBar,
    private userService : UserService,
    private confirmationService : ConfirmationService,
    public dialog: MatDialog,) {
      this.user$ =  userService.getUser();
      this.user$.subscribe(user => this.user = user);

    this.idReuniaoTemp =  this.itemService.getIdReuniao();
    this.itensService.carregarItensPorReuniao(this.idReuniaoTemp)
    .subscribe((itens : Item[] | any) => {
      this.itensList = itens;
      this.dataSource = new MatTableDataSource(itens);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnInit() {
    //Array.from(document.querySelectorAll('button[data-bs-toggle="popover"]'))
    //.forEach(popoverNode =>  new bootstrap.Popover() Popover(popoverNode))
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, 'Fechar',  {
      duration: this.durationInSeconds * 1000,
    });
  }

  getContador(){
      console.log('Incrementou')
      this.contador ++;
      return this.contador;
  }

  excluirItem(idItem : number, event : any){
    console.log('excluindo item id: ' + idItem);
    this.confirmationService.confirm({
      target: event.target!,
      message: `Excluir item?`,
      acceptLabel : 'Sim',
      rejectLabel: 'Não',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        console.log('excluir item...')
        this.itensService.excluirItemPorReuniao(this.idReuniaoTemp, idItem)
        .subscribe((itens : Item[] | any) => {
          this.itensList = itens;
          this.dataSource = new MatTableDataSource(this.itensList);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        });
      },
      reject: () => {
      }
  });





  }

  editarItem(item : Item){

    this.itemService.guardaItemTemp(item);

    const dialogRef = this.dialog.open(ModalEditarItemComponent);

    dialogRef.afterClosed().subscribe(result => {
      this.itensService.carregarItensPorReuniao(this.idReuniaoTemp)
      .subscribe((itens : Item[] | any) => {
        this.itensList = itens;
        this.dataSource = new MatTableDataSource(this.itensList);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
    });
  }


  abreModalNovoItem(){
    const dialogRef = this.dialog.open(ModalNovoItemComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.itensService.carregarItensPorReuniao(this.idReuniaoTemp)
        .subscribe((itens : Item[] | any) => {
          this.itensList = itens;
          this.dataSource = new MatTableDataSource(this.itensList);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        });
    });
  }

}

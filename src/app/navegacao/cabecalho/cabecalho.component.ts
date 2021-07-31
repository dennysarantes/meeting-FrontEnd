import { UserService } from 'src/app/services/user/service/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ConfirmationService} from 'primeng/api';


@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent implements OnInit {

  constructor(private router : Router,
              private confirmationService: ConfirmationService,
              private userService : UserService,
              ) { }

  ngOnInit() {
  }

  logout(){
    console.log('Fazendo logout...')

    this.userService.logout();
    this.router.navigate([''])
    .then(() => {
      window.location.reload();
    });

  }

  confirm(event: Event) {
    this.confirmationService.confirm({
        target: event.target!,
        message: 'Fazer logout?',
        acceptLabel : 'Sim',
        rejectLabel: 'Não',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            this.logout();
            console.log('teste')
        },
        reject: () => {
            //reject action
            console.log('não')
        }
    });
}

}

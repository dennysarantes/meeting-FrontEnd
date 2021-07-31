import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/services/user/model/user';
import { UserService } from 'src/app/services/user/service/user.service';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-tela-inicial-user',
  templateUrl: './tela-inicial-user.component.html',
  styleUrls: ['./tela-inicial-user.component.css'],
  styles: [`
      :host ::ng-deep button {
          margin-right: .25em;
      }
  `]
})
export class TelaInicialUserComponent implements OnInit {

  user$! : Observable<User>;
  user!: User;
  visibleSidebar1 : any;

  constructor(private userService : UserService,
    private primengConfig: PrimeNGConfig) {
    this.user$ =  userService.getUser();
    this.user$.subscribe(user => this.user = user);
   }

  ngOnInit() {
    this.primengConfig.ripple = true;
  }




}

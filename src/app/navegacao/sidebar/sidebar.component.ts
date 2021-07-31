import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/services/user/model/user';
import { UserService } from 'src/app/services/user/service/user.service';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  user$! : Observable<User>;
  user!: User;
  visibleSidebar : any;

  constructor(private userService : UserService,
    private primengConfig: PrimeNGConfig) {
    this.user$ =  userService.getUser();
    this.user$.subscribe(user => this.user = user);
   }

  ngOnInit() {
    this.primengConfig.ripple = true;
  }

  ngAfterViewInit(){
  }

  abrirMenuFilho(){
    this.visibleSidebar = true;
  }
}

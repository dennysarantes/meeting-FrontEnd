import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Observable } from 'rxjs';
import { User } from 'src/app/services/user/model/user';
import { UserService } from 'src/app/services/user/service/user.service';

@Component({
  selector: 'app-sidermenu-old',
  templateUrl: './sidermenu-old.component.html',
  styleUrls: ['./sidermenu-old.component.css']
})
export class SidermenuOldComponent implements OnInit {

  user$! : Observable<User>;
  user!: User;

  constructor(private userService : UserService) {
    this.user$ =  userService.getUser();
    this.user$.subscribe(user => this.user = user);
   }

   ngOnInit() {
    $(".sidebar-dropdown > a").click(function() {
      $(".sidebar-submenu").slideUp(200);
      if (
        $(this)
          .parent()
          .hasClass("active")
      ) {
        $(".sidebar-dropdown").removeClass("active");
        $(this)
          .parent()
          .removeClass("active");
      } else {
        $(".sidebar-dropdown").removeClass("active");
        $(this)
          .next(".sidebar-submenu")
          .slideDown(200);
        $(this)
          .parent()
          .addClass("active");
      }
    });

    $("#close-sidebar").click(function() {
      $(".page-wrapper").removeClass("toggled");
    });
    $("#show-sidebar").click(function() {
      $(".page-wrapper").addClass("toggled");
    });
  }


  }



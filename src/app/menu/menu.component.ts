import { Component, OnInit, DebugElement, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

/*   @ViewChild('sidebar') sidebar!: ElementRef<HTMLElement>;
  @ViewChild('sidebarCollapse') sidebarCollapse!: ElementRef<HTMLElement>;
  @ViewChild('li') li!: ElementRef<HTMLElement>;
  @ViewChild('dismiss') dismiss!: ElementRef<HTMLElement>; */


  constructor() { }

  ngOnInit() {


/*
    $(document).ready(function () {

      $('#dismiss').on('click', function () {
          $('#sidebar').removeClass('active');
      });
      $('#sidebarCollapse').on('click', function () {
          $('#sidebar').addClass('active');
      });

      $('li').on('click', function (event) {
        $('li').removeClass('active');
        $(event.target.parentNode || event.target).addClass('active');
      });

  });} */



}
}

import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-itens-sidebar',
  templateUrl: './itens-sidebar.component.html',
  styleUrls: ['./itens-sidebar.component.css']
})
export class ItensSidebarComponent implements OnInit {

  items!: MenuItem[];

  constructor() { }

  ngOnInit() {}

}

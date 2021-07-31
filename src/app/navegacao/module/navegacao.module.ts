import { TabelaProxComponent } from './../minhas-reunioes/tabela-prox/tabela-prox.component';
import { TabelaAntigasComponent } from './../minhas-reunioes/tabela-antigas/tabela-antigas.component';
import { SidebarComponent } from './../sidebar/sidebar.component';
import { TelaPrincipalUserComponent } from './../tela-principal-user/tela-principal-user.component';
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SidebarModule } from "primeng/sidebar";
import {ButtonModule} from 'primeng/button';
import {TabViewModule} from 'primeng/tabview';
import {AvatarModule} from 'primeng/avatar';
import { RelatorioCentralComponent } from '../relatorio-central/relatorio-central.component';
import {DividerModule} from 'primeng/divider'
import { CabecalhoComponent } from '../cabecalho/cabecalho.component';
import {ConfirmPopupModule} from 'primeng/confirmpopup'
import { ConfirmationService } from 'primeng/api';
import {AccordionModule} from 'primeng/accordion';
import { ItensSidebarComponent } from '../itens-sidebar/itens-sidebar.component';
import {PanelMenuModule} from 'primeng/panelmenu';
import { MinhasReunioesComponent } from '../minhas-reunioes/minhas-reunioes.component';
import {MatExpansionModule} from '@angular/material/expansion'
import {MatIconModule} from '@angular/material/icon'
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTabsModule} from '@angular/material/tabs';
import {MatBadgeModule} from '@angular/material/badge';
import { TabelaProxNoUserComponent } from '../minhas-reunioes/tabela-prox-noUser/tabela-prox-noUser.component';


@NgModule({
  imports: [CommonModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    TabViewModule,
    ButtonModule,
    SidebarModule,
    AvatarModule,
    DividerModule,
    ConfirmPopupModule,
    AccordionModule,
    PanelMenuModule,
    MatExpansionModule,
    MatIconModule,
    MatTableModule,
    MatDialogModule,
    MatTabsModule,
    MatBadgeModule
  ],
  declarations: [
                  CabecalhoComponent,
                  TelaPrincipalUserComponent,
                  SidebarComponent,
                  RelatorioCentralComponent,
                  ItensSidebarComponent,
                  MinhasReunioesComponent,
                  TabelaAntigasComponent,
                  TabelaProxComponent,
                  TabelaProxNoUserComponent
                 ],
  providers : [
    ConfirmationService
  ]
})

export class NavegacaoModule {}

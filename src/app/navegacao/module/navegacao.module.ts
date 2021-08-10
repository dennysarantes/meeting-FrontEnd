import { ModalNovoItemComponent } from './../modal-novo-item/modal-novo-item.component';
import { ModalParticipantesComponent } from './../modal-participantes/modal-participantes.component';
import { TabelaProxComponent } from './../minhas-reunioes/tabela-prox/tabela-prox.component';
import { TabelaAntigasComponent } from './../minhas-reunioes/tabela-antigas/tabela-antigas.component';
import { SidebarComponent } from './../sidebar/sidebar.component';
import { TelaPrincipalUserComponent } from './../tela-principal-user/tela-principal-user.component';
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
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
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import {MatSortModule} from '@angular/material/sort';
import { ModalItensComponent } from '../modal-itens/modal-itens.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTooltipModule} from '@angular/material/tooltip';
import { ModalEditarItemComponent } from '../modal-editar-item/modal-editar-item.component';
import {MatSliderModule} from '@angular/material/slider';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {CalendarModule} from 'primeng/calendar';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  imports: [CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    CalendarModule,
    TabViewModule,
    MatSelectModule,
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
    MatBadgeModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    MatSortModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatSliderModule,
    MatDatepickerModule
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
                  TabelaProxNoUserComponent,
                  ModalItensComponent,
                  ModalParticipantesComponent,
                  ModalNovoItemComponent,
                  ModalEditarItemComponent
                 ],
  providers : [
    ConfirmationService
  ]
})

export class NavegacaoModule {}

import { ModalDuvidaComponent } from './../minhas-tarefas/modal-duvida/modal-duvida.component';
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
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MinhasTarefasComponent } from '../minhas-tarefas/minhas-tarefas.component';
import { TarefasAtrasadasComponent } from '../minhas-tarefas/tarefas-atrasadas/tarefas-atrasadas.component';
import { ModalDetalhesTarefaComponent } from '../modal-detalhes-tarefa/modal-detalhes-tarefa.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {PanelModule} from 'primeng/panel';
import { TarefasPendentesComponent } from '../minhas-tarefas/tarefas-pendentes/tarefas-pendentes.component';
import { TarefasConcluidasComponent } from '../minhas-tarefas/tarefas-concluidas/tarefas-concluidas.component';

@NgModule({
  imports: [CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    CalendarModule,
    MatButtonModule,
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
    PanelModule,
    MatDividerModule,
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
    MatDatepickerModule,
    MatSlideToggleModule,
    MatCardModule
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
                  ModalEditarItemComponent,
                  MinhasTarefasComponent,
                  TarefasAtrasadasComponent,
                  ModalDetalhesTarefaComponent,
                  ModalDuvidaComponent,
                  TarefasPendentesComponent,
                  TarefasConcluidasComponent
                 ],
  providers : [
    ConfirmationService
  ]
})

export class NavegacaoModule {}

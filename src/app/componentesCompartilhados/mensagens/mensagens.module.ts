import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MensagensComponent } from './mensagens.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MensagensComponent],
  exports: [MensagensComponent]
})
export class MensagensModule { }

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PesquisaClientePage } from './pesquisa-cliente';

@NgModule({
  declarations: [
    PesquisaClientePage,
  ],
  imports: [
    IonicPageModule.forChild(PesquisaClientePage),
  ],
})
export class PesquisaClientePageModule {}

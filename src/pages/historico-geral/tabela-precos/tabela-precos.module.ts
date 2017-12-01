import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabelaPrecosPage } from './tabela-precos';

@NgModule({
  declarations: [
    TabelaPrecosPage,
  ],
  imports: [
    IonicPageModule.forChild(TabelaPrecosPage),
  ],
})
export class TabelaPrecosPageModule {}

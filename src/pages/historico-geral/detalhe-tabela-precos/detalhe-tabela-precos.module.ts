import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalheTabelaPrecosPage } from './detalhe-tabela-precos';

@NgModule({
  declarations: [
    DetalheTabelaPrecosPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalheTabelaPrecosPage),
  ],
})
export class DetalheTabelaPrecosPageModule {}

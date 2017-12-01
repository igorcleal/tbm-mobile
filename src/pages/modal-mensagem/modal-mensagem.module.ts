import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalMensagemPage } from './modal-mensagem';

@NgModule({
  declarations: [
    ModalMensagemPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalMensagemPage),
  ],
})
export class ModalMensagemPageModule {}

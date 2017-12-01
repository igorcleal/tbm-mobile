import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-modal-mensagem',
  templateUrl: 'modal-mensagem.html',
})
export class ModalMensagemPage {

  mensagem: string

  constructor(public viewCtrl: ViewController, public navParams: NavParams) { }

  ionViewDidLoad() {
    this.mensagem = this.navParams.get('mensagem');
  }

  fecharModal() {
    this.viewCtrl.dismiss();
  }

}

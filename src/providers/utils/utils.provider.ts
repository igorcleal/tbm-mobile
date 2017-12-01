import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { LoadingController } from 'ionic-angular';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';

@Injectable()
export class UtilsProvider {

  loading:any;

  constructor(public http: Http, 
    public modalCtrl:ModalController,
    public loadingCtrl: LoadingController) {
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: "Aguarde..."
    });
    this.loading.present();
  }
  closeLoading() {
    return this.loading.dismiss();
  }

  popupMensagem(mensagem: string) {
    let modal = this.modalCtrl.create('ModalMensagemPage',
      {
        mensagem: mensagem
      });
    modal.present();
  }

}

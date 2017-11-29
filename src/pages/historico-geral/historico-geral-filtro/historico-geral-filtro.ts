import { ViewController } from 'ionic-angular/navigation/view-controller';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';

@IonicPage()
@Component({
  selector: 'page-historico-geral-filtro',
  templateUrl: 'historico-geral-filtro.html',
})
export class HistoricoGeralFiltroPage {

  clienteStr: string = "";
  itemStr: string = "";

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public viewCtrl: ViewController) {
      this.clienteStr = navParams.get('cliente');
      this.itemStr = navParams.get('item');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoricoGeralFiltroPage');
  }

  abrirPopupCliente() {
    console.log('este');
    let modal = this.modalCtrl.create('PesquisaClientePage');

    modal.onDidDismiss(data => {
      if (data) {
        this.clienteStr = data.descricao;
      } else {
        this.clienteStr = "";
      }
    })
    modal.present();
  }

  abrirPopupItem() {
    let modal = this.modalCtrl.create('PesquisaItemSadigPage');

    modal.onDidDismiss(data => {
      if (data) {
        this.itemStr = data.descricao;
      } else {
        this.itemStr = "";
      }
    })
    modal.present();
  }

  pesquisar() {
    this.viewCtrl.dismiss({ cliente: this.clienteStr, item: this.itemStr });
  }

  fechar(){
    this.viewCtrl.dismiss();
  }

  limparFiltros(){
    this.clienteStr = "";
    this.itemStr = "";
  }

}

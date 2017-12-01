import { UtilsProvider } from './../../../providers/utils/utils.provider';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { TabelaPrecosProvider } from './../../../providers/tabela-precos/tabela-precos.provider';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tabela-precos',
  templateUrl: 'tabela-precos.html',
})
export class TabelaPrecosPage {

  listFios = [];
  listFiosSemFiltro = []
  busca: string;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public tabelaPrecosProvider: TabelaPrecosProvider,
    public modalCtrl: ModalController,
    public utils:UtilsProvider) {
  }

  ionViewDidLoad() {
    this.utils.showLoading();
    this.tabelaPrecosProvider.getFiosTabelaPreco().subscribe((response) => {
      this.listFios = response;
      this.listFiosSemFiltro = response;
      this.utils.closeLoading();
    }, error=>{
      console.error(error.message);
      this.utils.closeLoading();
    })
  }

  onInput(event) {
    this.listFios = this.listFiosSemFiltro.filter((item) => {
      return item.fio.toLowerCase().indexOf(this.busca.toLowerCase()) > -1;
    });
  }

  abrirDetalhesItem(item) { 
    console.log(item);
    this.modalCtrl.create('DetalheTabelaPrecosPage',{idTabelaPrecoItem:item.idTabelaPrecoItem, fio:item.fio})
      .present();
  }

}

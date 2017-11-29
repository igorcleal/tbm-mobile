import { ItemSadigProvider } from './../../providers/item-sadig/item-sadig.provider';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { UtilsProvider } from '../../providers/utils/utils.provider';
import { ItemSadigVO } from '../../model/item-sadig.model';

@IonicPage()
@Component({
  selector: 'page-pesquisa-item-sadig',
  templateUrl: 'pesquisa-item-sadig.html',
})
export class PesquisaItemSadigPage {

  busca: string;
  listItens: Array<ItemSadigVO> = [];
  listItensSemFiltro: Array<ItemSadigVO> = [];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public utils: UtilsProvider,
    public viewCtrl: ViewController,
    public itemSadigProvider: ItemSadigProvider) {
  }

  ionViewDidLoad() {
    this.getItens();
  }

  getItens() {
    this.utils.showLoading();
    this.itemSadigProvider.consultar().subscribe(list => {
      console.log(list);
      this.utils.closeLoading();
      this.listItens = list;
      this.listItensSemFiltro = list;
    });
  }

  fechar(item) {
    this.viewCtrl.dismiss(item);
  }

  onInput(event) {
    this.listItens = this.listItensSemFiltro.filter((item) => {
      return item.descricao.toLowerCase().indexOf(this.busca.toLowerCase()) > -1;
    });
  }

}

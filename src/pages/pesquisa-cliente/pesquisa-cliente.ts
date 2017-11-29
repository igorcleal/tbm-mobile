import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular/navigation/view-controller';

import { UtilsProvider } from './../../providers/utils/utils.provider';
import { ClienteVO } from './../../model/cliente.model';
import { ClienteSadigProvider } from '../../providers/cliente-sadig/cliente-sadig.provider';

@IonicPage()
@Component({
  selector: 'page-pesquisa-cliente',
  templateUrl: 'pesquisa-cliente.html',
})
export class PesquisaClientePage {

  busca: string;
  listClientes: Array<ClienteVO> = [];
  listClientesSemFiltro: Array<ClienteVO> = [];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public clienteSadigProvider: ClienteSadigProvider,
    public utils: UtilsProvider,
    public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    this.getClientes();
  }

  getClientes() {
    console.log('consultando');
    this.utils.showLoading();
    this.clienteSadigProvider.consultar().subscribe(list => {

      this.utils.closeLoading();
      this.listClientes = list;
      this.listClientesSemFiltro = list;
    });
  }

  fechar(cliente) {
    this.viewCtrl.dismiss(cliente);
  }

  onInput(event) {
    this.listClientes = this.listClientesSemFiltro.filter((item) => {
      return item.descricao.toLowerCase().indexOf(this.busca.toLowerCase()) > -1;
    });
  }

}

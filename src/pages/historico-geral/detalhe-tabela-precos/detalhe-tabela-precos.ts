import { ViewController } from 'ionic-angular/navigation/view-controller';
import { UtilsProvider } from './../../../providers/utils/utils.provider';
import { TabelaPrecosProvider } from './../../../providers/tabela-precos/tabela-precos.provider';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-detalhe-tabela-precos',
  templateUrl: 'detalhe-tabela-precos.html',
})
export class DetalheTabelaPrecosPage {

  idTabelaPrecoItem: number;
  fio: string;

  dadosItem: any = '';

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public tabelaPrecosProvider: TabelaPrecosProvider,
    public utils: UtilsProvider,
    public viewCtrl: ViewController) {
    this.idTabelaPrecoItem = this.navParams.get('idTabelaPrecoItem');
    this.fio = this.navParams.get('fio');
  }

  ionViewDidLoad() {
    this.utils.showLoading();
    this.tabelaPrecosProvider.obtemDadosItem(this.idTabelaPrecoItem).subscribe((response) => {
      this.dadosItem = response[0];
      console.log(this.dadosItem);
      this.utils.closeLoading();
    }, error=>{
      console.error(error.message);
      this.utils.closeLoading();
    });
  }

  fechar() {
    this.viewCtrl.dismiss();
  }

}

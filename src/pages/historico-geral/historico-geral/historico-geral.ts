import { ListVolumeFaturadoComponent } from './../../../components/historico-geral/list-volume-faturado/list-volume-faturado';
import { ListUltimosPedidosComponent } from './../../../components/historico-geral/list-ultimos-pedidos/list-ultimos-pedidos';
import { ListPedidosAbertosComponent } from './../../../components/historico-geral/list-pedidos-abertos/list-pedidos-abertos';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HistoricoGeralProvider } from '../../../providers/historico-geral/historico-geral.provider';

@IonicPage()
@Component({
  selector: 'page-historico-geral',
  templateUrl: 'historico-geral.html',
})
export class HistoricoGeralPage {

  @ViewChild(ListPedidosAbertosComponent)
  listPedidosAbertosComponent: ListPedidosAbertosComponent;

  @ViewChild(ListUltimosPedidosComponent)
  listUltimosPedidosComponent: ListUltimosPedidosComponent;

  @ViewChild(ListVolumeFaturadoComponent)
  lstVolumeFaturadoComponent: ListVolumeFaturadoComponent;

  cliente: string = "";
  item: string = "";
  segment: string = null;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public historicoGeralProvider: HistoricoGeralProvider) {
  }

  abrirFiltros() {
    let modal = this.modalCtrl.create('HistoricoGeralFiltroPage', { cliente: this.cliente, item: this.item });
    modal.onDidDismiss(data => {
      if (data != null) {
        this.cliente = data.cliente;
        this.item = data.item;
        console.log(data);

        if (this.segment == null) {
          this.segment = 'volume_faturado';
        }else{
          this.pesquisar()
        }

      }

    })
    modal.present();
  }

  pesquisar() {

    if (!this.validarFiltros())
      return;

    if (this.segment == 'pedidos_abertos') {
      this.listPedidosAbertosComponent.pesquisarPedidosAbertos(this.cliente, this.item);
    }
    else if (this.segment == 'ultimos_pedidos') {
      this.listUltimosPedidosComponent.pesquisarUltimosPedidos(this.cliente, this.item);
    }
    else if (this.segment == 'volume_faturado') {
      this.lstVolumeFaturadoComponent.pesquisarVolumeFaturado(this.cliente, this.item);
    }
  }

  validarFiltros() {
    if (this.item || this.cliente) {
      return true
    }
    return false
  }

  abrirTabelaPrecos(){
    this.navCtrl.push('TabelaPrecosPage');
  }

}

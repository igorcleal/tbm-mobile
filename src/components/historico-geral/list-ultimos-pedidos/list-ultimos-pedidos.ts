import { HistoricoGeralProvider } from './../../../providers/historico-geral/historico-geral.provider';
import { Component, Input } from '@angular/core';
import { UtilsProvider } from '../../../providers/utils/utils.provider';

@Component({
  selector: 'list-ultimos-pedidos',
  templateUrl: 'list-ultimos-pedidos.html'
})
export class ListUltimosPedidosComponent {

  @Input()
  cliente: string = "";

  @Input()
  item: string = "";

  listUltimosPedidos;

  constructor(public utils: UtilsProvider,
    public historicoGeralProvider: HistoricoGeralProvider) {
  }

  ngOnInit() {
    this.pesquisarUltimosPedidos(this.cliente, this.item);
  }

  pesquisarUltimosPedidos(cliente, item) {
    this.utils.showLoading();
    this.historicoGeralProvider.ultimosPedidos(cliente, item)
      .subscribe(response => {
        this.listUltimosPedidos = response;
        this.utils.closeLoading();
      });
  }

}

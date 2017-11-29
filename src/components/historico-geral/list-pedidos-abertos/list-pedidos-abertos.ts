import { Component, Input } from '@angular/core';
import { UtilsProvider } from '../../../providers/utils/utils.provider';
import { HistoricoGeralProvider } from '../../../providers/historico-geral/historico-geral.provider';

@Component({
  selector: 'list-pedidos-abertos',
  templateUrl: 'list-pedidos-abertos.html'
})
export class ListPedidosAbertosComponent {

  @Input()
  cliente: string;

  @Input()
  item: string;

  listPedidosAbertos;

  constructor(public utils: UtilsProvider,
    public historicoGeralProvider: HistoricoGeralProvider) {
  }

  ngOnInit() {
    this.pesquisarPedidosAbertos(this.cliente, this.item);
  }

  pesquisarPedidosAbertos(cliente, item){
    this.utils.showLoading();
    this.historicoGeralProvider.pedidosAbertos(cliente, item)
      .subscribe(response => {
        this.listPedidosAbertos = response;
        this.utils.closeLoading();
      });
  }

}

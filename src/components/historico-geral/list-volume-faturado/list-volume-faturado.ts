import { UtilsProvider } from './../../../providers/utils/utils.provider';
import { Component, Input } from '@angular/core';
import { HistoricoGeralProvider } from '../../../providers/historico-geral/historico-geral.provider';

@Component({
  selector: 'list-volume-faturado',
  templateUrl: 'list-volume-faturado.html'
})
export class ListVolumeFaturadoComponent {

  @Input()
  cliente: string = "";

  @Input()
  item: string = "";

  listVolumeFaturado;

  totalFaturado: number = 0;

  constructor(public historicoGeralProvider: HistoricoGeralProvider,
    public utils: UtilsProvider) {
  }

  ngOnInit() {
    this.pesquisarVolumeFaturado(this.cliente, this.item);
  }

  pesquisarVolumeFaturado(cliente, item) {
    this.utils.showLoading();
    this.historicoGeralProvider.volumeFaturadoUltimosSeisMeses(cliente, item)
      .subscribe(response => {
        console.log(response);
        this.listVolumeFaturado = response;
        this.totalFaturado = 0;
        this.listVolumeFaturado.forEach(element => {
          this.totalFaturado = this.totalFaturado + element.volume;
        });
        this.utils.closeLoading();
      });
  }

}

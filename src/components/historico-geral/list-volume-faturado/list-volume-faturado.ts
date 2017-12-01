import { UtilsProvider } from './../../../providers/utils/utils.provider';
import { Component, Input, ViewChild } from '@angular/core';
import { HistoricoGeralProvider } from '../../../providers/historico-geral/historico-geral.provider';
import { Chart } from 'chart.js';

@Component({
  selector: 'list-volume-faturado',
  templateUrl: 'list-volume-faturado.html'
})
export class ListVolumeFaturadoComponent {

  @ViewChild('barCanvas') barCanvas;

  barChart: any;

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
        this.criarGrafico();
        this.utils.closeLoading();
      });
      
  }

  public criarGrafico() {

    let labels = [];
    let data = [];

    this.listVolumeFaturado.forEach(element => {
      labels.push(element.periodo);  
      data.push(element.volume);  
    });


    this.barChart = new Chart(this.barCanvas.nativeElement, {

      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Volume',
          data: data,
          backgroundColor: [
            'rgba(255, 153, 0, 0.4)',
            'rgba(255, 153, 0, 0.4)',
            'rgba(255, 153, 0, 0.4)',
            'rgba(255, 153, 0, 0.4)',
            'rgba(255, 153, 0, 0.4)',
            'rgba(255, 153, 0, 0.4)'
          ],
          borderColor: [
            'rgba(255, 153, 0, 1)',
            'rgba(255, 153, 0, 1)',
            'rgba(255, 153, 0, 1)',
            'rgba(255, 153, 0, 1)',
            'rgba(255, 153, 0, 1)',
            'rgba(255, 153, 0, 1)',
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }

    });
  }

}

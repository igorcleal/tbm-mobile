import { ListVolumeFaturadoComponent } from './../../../components/historico-geral/list-volume-faturado/list-volume-faturado';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HistoricoGeralPage } from './historico-geral';
import { ListUltimosPedidosComponent } from '../../../components/historico-geral/list-ultimos-pedidos/list-ultimos-pedidos';
import { ListPedidosAbertosComponent } from '../../../components/historico-geral/list-pedidos-abertos/list-pedidos-abertos';

@NgModule({
  declarations: [
    HistoricoGeralPage,
    ListVolumeFaturadoComponent,
    ListUltimosPedidosComponent,
    ListPedidosAbertosComponent
  ],
  imports: [
    IonicPageModule.forChild(HistoricoGeralPage),
  ],
})
export class HistoricoGeralPageModule {}

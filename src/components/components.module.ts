import { NgModule } from '@angular/core';
import { ListVolumeFaturadoComponent } from './historico-geral/list-volume-faturado/list-volume-faturado';
import { ListUltimosPedidosComponent } from './historico-geral/list-ultimos-pedidos/list-ultimos-pedidos';
import { ListPedidosAbertosComponent } from './historico-geral/list-pedidos-abertos/list-pedidos-abertos';
@NgModule({
	declarations: [ListVolumeFaturadoComponent,
    ListUltimosPedidosComponent,
    ListPedidosAbertosComponent],
	imports: [],
	exports: [ListVolumeFaturadoComponent,
    ListUltimosPedidosComponent,
    ListPedidosAbertosComponent]
})
export class ComponentsModule {}

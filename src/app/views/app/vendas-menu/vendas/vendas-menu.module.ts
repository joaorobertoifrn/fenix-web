import { NgModule } from '@angular/core';
import { VendasComponent } from './vendas/vendas.component';
import { VendasMenuComponent } from './vendas-menu.component';
import { VendasMenuRoutingModule } from './vendas-menu.routing';
import { SharedModule } from 'src/app/shared/shared.module';
import { LayoutContainersModule } from 'src/app/containers/layout/layout.containers.module';

@NgModule({
  declarations: [VendasMenuComponent, VendasComponent],
  imports: [
    SharedModule,
    LayoutContainersModule,
    VendasMenuRoutingModule
  ]
})
export class VendasMenuModule { }

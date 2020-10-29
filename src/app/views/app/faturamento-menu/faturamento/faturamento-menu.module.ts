import { NgModule } from '@angular/core';
import { FaturamentoComponent } from './faturamento/faturamento.component';
import { FaturamentoMenuComponent } from './faturamento-menu.component';
import { FaturamentoMenuRoutingModule } from './faturamento-menu.routing';
import { SharedModule } from 'src/app/shared/shared.module';
import { LayoutContainersModule } from 'src/app/containers/layout/layout.containers.module';

@NgModule({
  declarations: [FaturamentoMenuComponent, FaturamentoComponent],
  imports: [
    SharedModule,
    LayoutContainersModule,
    FaturamentoMenuRoutingModule
  ]
})
export class FaturamentoMenuModule { }

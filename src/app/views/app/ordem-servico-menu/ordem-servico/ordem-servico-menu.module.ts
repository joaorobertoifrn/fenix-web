import { NgModule } from '@angular/core';
import { OrdemServicoComponent } from './ordem-servico/ordem-servico.component';
import { OrdemServicoMenuComponent } from './ordem-servico-menu.component';
import { OrdemServicoMenuRoutingModule } from './ordem-servico-menu.routing';
import { SharedModule } from 'src/app/shared/shared.module';
import { LayoutContainersModule } from 'src/app/containers/layout/layout.containers.module';

@NgModule({
  declarations: [OrdemServicoMenuComponent, OrdemServicoComponent],
  imports: [
    SharedModule,
    LayoutContainersModule,
    OrdemServicoMenuRoutingModule
  ]
})
export class OrdemServicoMenuModule { }

import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ComissoesMenuComponent } from './comissoes-menu.component';
import { ComissoesMenuTypesComponent } from './comissoes-menu-types/comissoes-menu-types.component';
import { ComissoesMenuRoutingModule } from './comissoes-menu.routing';
import { LayoutContainersModule } from 'src/app/containers/layout/layout.containers.module';

@NgModule({
  declarations: [ComissoesMenuComponent, ComissoesMenuTypesComponent],
  imports: [
    SharedModule,
    ComissoesMenuRoutingModule,
    LayoutContainersModule
  ]
})
export class ComissoesMenuModule { }

import { NgModule } from '@angular/core';
import { LojaComponent } from './loja/loja.component';
import { LojaMenuComponent } from './loja-menu.component';
import { LojaMenuRoutingModule } from './loja-menu.routing';
import { SharedModule } from 'src/app/shared/shared.module';
import { LayoutContainersModule } from 'src/app/containers/layout/layout.containers.module';

@NgModule({
  declarations: [LojaMenuComponent, LojaComponent],
  imports: [
    SharedModule,
    LayoutContainersModule,
    LojaMenuRoutingModule
  ]
})
export class LojaMenuModule { }

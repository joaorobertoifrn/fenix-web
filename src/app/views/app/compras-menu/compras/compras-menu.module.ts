import { NgModule } from '@angular/core';
import { ComprasComponent } from './compras/compras.component';
import { ComprasMenuComponent } from './compras-menu.component';
import { ComprasMenuRoutingModule } from './compras-menu.routing';
import { SharedModule } from 'src/app/shared/shared.module';
import { LayoutContainersModule } from 'src/app/containers/layout/layout.containers.module';

@NgModule({
  declarations: [ComprasMenuComponent, ComprasComponent],
  imports: [
    SharedModule,
    LayoutContainersModule,
    ComprasMenuRoutingModule
  ]
})
export class ComprasMenuModule { }

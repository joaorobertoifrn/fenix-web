import { NgModule } from '@angular/core';
import { EstoqueComponent } from './estoque/estoque.component';
import { EstoqueMenuComponent } from './estoque-menu.component';
import { EstoqueMenuRoutingModule } from './estoque-menu.routing';
import { SharedModule } from 'src/app/shared/shared.module';
import { LayoutContainersModule } from 'src/app/containers/layout/layout.containers.module';

@NgModule({
  declarations: [EstoqueMenuComponent, EstoqueComponent],
  imports: [
    SharedModule,
    LayoutContainersModule,
    EstoqueMenuRoutingModule
  ]
})
export class EstoqueMenuModule { }

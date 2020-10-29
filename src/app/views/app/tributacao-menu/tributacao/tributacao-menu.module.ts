import { NgModule } from '@angular/core';
import { TributacaoComponent } from './tributacao/tributacao.component';
import { TributacaoMenuComponent } from './tributacao-menu.component';
import { TributacaoMenuRoutingModule } from './tributacao-menu.routing';
import { SharedModule } from 'src/app/shared/shared.module';
import { LayoutContainersModule } from 'src/app/containers/layout/layout.containers.module';

@NgModule({
  declarations: [TributacaoMenuComponent, TributacaoComponent],
  imports: [
    SharedModule,
    LayoutContainersModule,
    TributacaoMenuRoutingModule
  ]
})
export class TributacaoMenuModule { }

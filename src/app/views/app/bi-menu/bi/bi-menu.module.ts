import { NgModule } from '@angular/core';
import { BiComponent } from './bi/bi.component';
import { BiMenuComponent } from './bi-menu.component';
import { BiMenuRoutingModule } from './bi-menu.routing';
import { SharedModule } from 'src/app/shared/shared.module';
import { LayoutContainersModule } from 'src/app/containers/layout/layout.containers.module';

@NgModule({
  declarations: [BiMenuComponent, BiComponent],
  imports: [
    SharedModule,
    LayoutContainersModule,
    BiMenuRoutingModule
  ]
})
export class BiMenuModule { }

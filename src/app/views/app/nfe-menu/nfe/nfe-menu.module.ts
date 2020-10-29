import { NgModule } from '@angular/core';
import { NfeComponent } from './nfe/nfe.component';
import { NfeMenuComponent } from './nfe-menu.component';
import { NfeMenuRoutingModule } from './nfe-menu.routing';
import { SharedModule } from 'src/app/shared/shared.module';
import { LayoutContainersModule } from 'src/app/containers/layout/layout.containers.module';

@NgModule({
  declarations: [NfeMenuComponent, NfeComponent],
  imports: [
    SharedModule,
    LayoutContainersModule,
    NfeMenuRoutingModule
  ]
})
export class NfeMenuModule { }

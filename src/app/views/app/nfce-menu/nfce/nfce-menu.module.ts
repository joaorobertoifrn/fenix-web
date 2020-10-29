import { NgModule } from '@angular/core';
import { NfceComponent } from './nfce/nfce.component';
import { NfceMenuComponent } from './nfce-menu.component';
import { NfceMenuRoutingModule } from './nfce-menu.routing';
import { SharedModule } from 'src/app/shared/shared.module';
import { LayoutContainersModule } from 'src/app/containers/layout/layout.containers.module';

@NgModule({
  declarations: [NfceMenuComponent, NfceComponent],
  imports: [
    SharedModule,
    LayoutContainersModule,
    NfceMenuRoutingModule
  ]
})
export class NfceMenuModule { }

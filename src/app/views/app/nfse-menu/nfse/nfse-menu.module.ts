import { NgModule } from '@angular/core';
import { NfseComponent } from './nfse/nfse.component';
import { NfseMenuComponent } from './nfse-menu.component';
import { NfseMenuRoutingModule } from './nfse-menu.routing';
import { SharedModule } from 'src/app/shared/shared.module';
import { LayoutContainersModule } from 'src/app/containers/layout/layout.containers.module';

@NgModule({
  declarations: [NfseMenuComponent, NfseComponent],
  imports: [
    SharedModule,
    LayoutContainersModule,
    NfseMenuRoutingModule
  ]
})
export class NfseMenuModule { }

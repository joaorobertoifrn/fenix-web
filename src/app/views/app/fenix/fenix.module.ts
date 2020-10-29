import { NgModule } from '@angular/core';
import { StartComponent } from './start/start.component';
import { FenixComponent } from './fenix.component';
import { FenixRoutingModule } from './fenix.routing';
import { SharedModule } from 'src/app/shared/shared.module';
import { LayoutContainersModule } from 'src/app/containers/layout/layout.containers.module';

@NgModule({
  declarations: [FenixComponent, StartComponent],
  imports: [
    SharedModule,
    LayoutContainersModule,
    FenixRoutingModule
  ]
})
export class FenixModule { }

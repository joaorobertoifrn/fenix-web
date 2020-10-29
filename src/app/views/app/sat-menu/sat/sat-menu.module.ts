import { NgModule } from '@angular/core';
import { SatComponent } from './sat/sat.component';
import { SatMenuComponent } from './sat-menu.component';
import { SatMenuRoutingModule } from './sat-menu.routing';
import { SharedModule } from 'src/app/shared/shared.module';
import { LayoutContainersModule } from 'src/app/containers/layout/layout.containers.module';

@NgModule({
  declarations: [SatMenuComponent, SatComponent],
  imports: [
    SharedModule,
    LayoutContainersModule,
    SatMenuRoutingModule
  ]
})
export class SatMenuModule { }

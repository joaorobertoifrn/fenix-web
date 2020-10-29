import { NgModule } from '@angular/core';
import { GedComponent } from './ged/ged.component';
import { GedMenuComponent } from './ged-menu.component';
import { GedMenuRoutingModule } from './ged-menu.routing';
import { SharedModule } from 'src/app/shared/shared.module';
import { LayoutContainersModule } from 'src/app/containers/layout/layout.containers.module';

@NgModule({
  declarations: [GedMenuComponent, GedComponent],
  imports: [
    SharedModule,
    LayoutContainersModule,
    GedMenuRoutingModule
  ]
})
export class GedMenuModule { }

import { NgModule } from '@angular/core';
import { SpedComponent } from './sped/sped.component';
import { SpedMenuComponent } from './sped-menu.component';
import { SpedMenuRoutingModule } from './sped-menu.routing';
import { SharedModule } from 'src/app/shared/shared.module';
import { LayoutContainersModule } from 'src/app/containers/layout/layout.containers.module';

@NgModule({
  declarations: [SpedMenuComponent, SpedComponent],
  imports: [
    SharedModule,
    LayoutContainersModule,
    SpedMenuRoutingModule
  ]
})
export class SpedMenuModule { }

import { NgModule } from '@angular/core';
import { AfvComponent } from './afv/afv.component';
import { AfvMenuComponent } from './afv-menu.component';
import { AfvMenuRoutingModule } from './afv-menu.routing';
import { SharedModule } from 'src/app/shared/shared.module';
import { LayoutContainersModule } from 'src/app/containers/layout/layout.containers.module';

@NgModule({
  declarations: [AfvMenuComponent, AfvComponent],
  imports: [
    SharedModule,
    LayoutContainersModule,
    AfvMenuRoutingModule
  ]
})
export class AfvMenuModule { }

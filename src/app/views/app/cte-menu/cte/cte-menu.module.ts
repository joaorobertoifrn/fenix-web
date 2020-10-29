import { NgModule } from '@angular/core';
import { CteComponent } from './cte/cte.component';
import { CteMenuComponent } from './cte-menu.component';
import { CteMenuRoutingModule } from './cte-menu.routing';
import { SharedModule } from 'src/app/shared/shared.module';
import { LayoutContainersModule } from 'src/app/containers/layout/layout.containers.module';

@NgModule({
  declarations: [CteMenuComponent, CteComponent],
  imports: [
    SharedModule,
    LayoutContainersModule,
    CteMenuRoutingModule
  ]
})
export class CteMenuModule { }

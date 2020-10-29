import { NgModule } from '@angular/core';
import { CrmComponent } from './crm/crm.component';
import { CrmMenuComponent } from './crm-menu.component';
import { CrmMenuRoutingModule } from './crm-menu.routing';
import { SharedModule } from 'src/app/shared/shared.module';
import { LayoutContainersModule } from 'src/app/containers/layout/layout.containers.module';

@NgModule({
  declarations: [CrmMenuComponent, CrmComponent],
  imports: [
    SharedModule,
    LayoutContainersModule,
    CrmMenuRoutingModule
  ]
})
export class CrmMenuModule { }

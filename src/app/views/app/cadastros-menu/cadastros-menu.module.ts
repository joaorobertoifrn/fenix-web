import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { CadastrosMenuComponent } from './cadastros-menu.component';
import { CadastrosMenuTypesComponent } from './cadastros-menu-types/cadastros-menu-types.component';
import { CadastrosMenuRoutingModule } from './cadastros-menu.routing';
import { LayoutContainersModule } from 'src/app/containers/layout/layout.containers.module';
import { DatatablesModule } from 'src/app/page/datatables/datatables.module';

@NgModule({
  declarations: [
    CadastrosMenuComponent,
    CadastrosMenuTypesComponent
  ],
  imports: [
    SharedModule,
    CadastrosMenuRoutingModule,
    LayoutContainersModule,
    DatatablesModule
  ]
})
export class CadastrosMenuModule { }

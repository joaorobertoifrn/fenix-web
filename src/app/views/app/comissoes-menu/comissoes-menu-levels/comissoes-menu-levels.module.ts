import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ComissoesMenuLevelsRoutingModule } from './comissoes-menu-levels.routing';
import { ComissoesMenuLevelsComponent } from './comissoes-menu-levels.component';
import { ThirdLevel1Component } from './third-level1/third-level1.component';
import { ThirdLevel2Component } from './third-level2/third-level2.component';
import { ThirdLevel3Component } from './third-level3/third-level3.component';

@NgModule({
  declarations: [ComissoesMenuLevelsComponent, ThirdLevel1Component, ThirdLevel2Component, ThirdLevel3Component],
  imports: [
    SharedModule,
    ComissoesMenuLevelsRoutingModule
  ]
})
export class ComissoesMenuLevelsModule { }

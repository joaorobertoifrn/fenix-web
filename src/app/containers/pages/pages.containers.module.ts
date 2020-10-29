import { BancoModalComponent } from './../../views/app/cadastros-menu/cadastros-menu-levels/banco-modal/banco-modal.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CollapseModule, RatingModule, TabsModule, AccordionModule, BsDropdownModule } from 'ngx-bootstrap';
import { FormsModule as FormsModuleAngular, ReactiveFormsModule } from '@angular/forms';
import { LightboxModule } from 'ngx-lightbox';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { ListPageHeaderComponent } from './list-page-header/list-page-header.component';
import { ComponentsPagesModule } from '../../components/pages/components.pages.module';
import { ComponentsCardsModule } from '../../components/cards/components.cards.module';
import { ComponentsPlayerModule } from 'src/app/components/player/components.player.module';
import { LayoutContainersModule } from '../layout/layout.containers.module';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    BancoModalComponent,
    ListPageHeaderComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    CollapseModule,
    RatingModule,
    ReactiveFormsModule,
    FormsModuleAngular,
    TranslateModule,
    NgSelectModule,
    TimepickerModule,
    LayoutContainersModule,
    NgSelectModule,
    LightboxModule,
    ComponentsPagesModule,
    ComponentsCardsModule,
    ComponentsPlayerModule,
    RatingModule.forRoot(),
    TabsModule.forRoot(),
    AccordionModule.forRoot(),
    BsDropdownModule.forRoot()
  ],
  exports: [
    BancoModalComponent,
    ListPageHeaderComponent,
  ]
})
export class PagesContainersModule { }

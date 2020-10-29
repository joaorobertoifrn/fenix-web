import { NotificationsService } from 'angular2-notifications';
import { BancoComponent } from './banco/banco.component';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { CadastrosMenuLevelsRoutingModule } from './cadastros-menu-levels.routing';
import { CadastrosMenuLevelsComponent } from './cadastros-menu-levels.component';
import { PessoaComponent } from './pessoa/pessoa.component';
import { ClienteComponent } from './cliente/cliente.component';
import { FornecedorComponent } from './fornecedor/fornecedor.component';
import { TransportadoraComponent } from './transportadora/transportadora.component';
import { ContadorComponent } from './contador/contador.component';
import { EstadoCivilComponent } from './estado-civil/estado-civil.component';
import { NivelFormacaoComponent } from './nivel-formacao/nivel-formacao.component';
import { DatatablesModule } from 'src/app/page/datatables/datatables.module';
import { ComponentsCarouselModule } from 'src/app/components/carousel/components.carousel.module';
import { PagesContainersModule } from 'src/app/containers/pages/pages.containers.module';
import { HotkeyModule } from 'angular2-hotkeys';
import { ComponentsCardsModule } from 'src/app/components/cards/components.cards.module';
import { ComponentsChartModule } from 'src/app/components/charts/components.charts.module';
import { PaginationModule, TabsModule, ModalModule, BsDropdownModule, AccordionModule  } from 'ngx-bootstrap';
import { LayoutContainersModule } from 'src/app/containers/layout/layout.containers.module';
import { ContextMenuModule } from 'ngx-contextmenu';
import { FormsModule as FormsModuleAngular, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CadastrosMenuLevelsComponent,
    PessoaComponent,
    ClienteComponent,
    FornecedorComponent,
    TransportadoraComponent,
    ContadorComponent,
    EstadoCivilComponent,
    NivelFormacaoComponent,
    BancoComponent
  ],
  imports: [
    SharedModule,
    DatatablesModule,
    CadastrosMenuLevelsRoutingModule,
    ComponentsCarouselModule,
    LayoutContainersModule,
    PagesContainersModule,
    ComponentsCardsModule,
    ComponentsChartModule,
    FormsModuleAngular,
    ReactiveFormsModule,
    HotkeyModule.forRoot(),
    PaginationModule.forRoot(),
    TabsModule.forRoot(),
    ModalModule.forRoot(),
    BsDropdownModule.forRoot(),
    AccordionModule.forRoot(),
    ContextMenuModule.forRoot({
      useBootstrap4: true,
    })
  ]
})
export class CadastrosMenuLevelsModule { }

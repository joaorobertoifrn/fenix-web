import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BlankPageComponent } from './blank-page/blank-page.component';

const routes: Routes = [
    {
        path: '', component: AppComponent,
        children: [
            { path: '', pathMatch: 'full', redirectTo: 'fenix' },
            //{ path: 'afv-menu', loadChildren: () => import('./afv-menu/afv-menu.module').then(m => m.AfvMenuModule) },
            //{ path: 'bi-menu', loadChildren: () => import('./bi-menu/bi-menu.module').then(m => m.BiMenuModule) },
            { path: 'blank-page', component: BlankPageComponent },
            { path: 'cadastros-menu', loadChildren: () => import('./cadastros-menu/cadastros-menu.module').then(m => m.CadastrosMenuModule) },
            { path: 'comissoes-menu', loadChildren: () => import('./comissoes-menu/comissoes-menu.module').then(m => m.ComissoesMenuModule) },
            //{ path: 'compras-menu', loadChildren: () => import('./compras-menu/compras-menu.module').then(m => m.ComprasMenuModule) },
            //{ path: 'crm-menu', loadChildren: () => import('./crm-menu/crm-menu.module').then(m => m.CrmMenuModule) },
            //{ path: 'cte-menu', loadChildren: () => import('./cte-menu/cte-menu.module').then(m => m.CteMenuModule) },
            //{ path: 'estoque-menu', loadChildren: () => import('./estoque-menu/estoque-menu.module').then(m => m.EstoqueMenuModule) },
            //{ path: 'faturamento-menu', loadChildren: () => import('./faturamento-menu/faturamento-menu.module').then(m => m.FaturamentoMenuModule) },
            { path: 'fenix', loadChildren: () => import('./fenix/fenix.module').then(m => m.FenixModule) },
            //{ path: 'ged-menu', loadChildren: () => import('./ged-menu/ged-menu.module').then(m => m.GedMenuModule) },
            //{ path: 'loja-menu', loadChildren: () => import('./loja-menu/loja-menu.module').then(m => m.LojaMenuModule) },
            //{ path: 'nfce-menu', loadChildren: () => import('./nfce-menu/nfce-menu.module').then(m => m.NfceMenuModule) },
            //{ path: 'nfe-menu', loadChildren: () => import('./nfe-menu/nfe-menu.module').then(m => m.NfeMenuModule) },
            //{ path: 'nfse-menu', loadChildren: () => import('./nfse-menu/nfse-menu.module').then(m => m.NfseMenuModule) },
            //{ path: 'ordem-servico-menu', loadChildren: () => import('./ordem-servico-menu/ordem-servico-menu.module').then(m => m.OrdemServicoMenuModule) },
            //{ path: 'sat-menu', loadChildren: () => import('./sat-menu/sat-menu.module').then(m => m.SatMenuModule) },
            //{ path: 'sped-menu', loadChildren: () => import('./sped-menu/sped-menu.module').then(m => m.SpedMenuModule) },
            //{ path: 'tributacao-menu', loadChildren: () => import('./tributacao-menu/tributacao-menu.module').then(m => m.TributacaoMenuModule) },
            //{ path: 'vendas-menu', loadChildren: () => import('./vendas-menu/vendas-menu.module').then(m => m.VendasMenuModule) },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

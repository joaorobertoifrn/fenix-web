import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VendasMenuComponent } from './vendas-menu.component';
import { VendasComponent } from './vendas/vendas.component';

const routes: Routes = [
    {
        path: '', component: VendasMenuComponent,
        children: [
            { path: '', redirectTo: 'vendas', pathMatch: 'full' },
            { path: 'vendas', component: VendasComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class VendasMenuRoutingModule { }

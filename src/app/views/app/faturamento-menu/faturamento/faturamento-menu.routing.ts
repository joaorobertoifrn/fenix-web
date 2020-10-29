import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FaturamentoMenuComponent } from './faturamento-menu.component';
import { FaturamentoComponent } from './faturamento/faturamento.component';

const routes: Routes = [
    {
        path: '', component: FaturamentoMenuComponent,
        children: [
            { path: '', redirectTo: 'faturamento', pathMatch: 'full' },
            { path: 'faturamento', component: FaturamentoComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FaturamentoMenuRoutingModule { }

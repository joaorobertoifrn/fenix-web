import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrdemServicoMenuComponent } from './ordem-servico-menu.component';
import { OrdemServicoComponent } from './ordem-servico/ordem-servico.component';

const routes: Routes = [
    {
        path: '', component: OrdemServicoMenuComponent,
        children: [
            { path: '', redirectTo: 'ordem-servico', pathMatch: 'full' },
            { path: 'ordem-servico', component: OrdemServicoComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OrdemServicoMenuRoutingModule { }

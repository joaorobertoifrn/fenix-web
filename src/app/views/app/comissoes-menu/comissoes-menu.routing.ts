import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComissoesMenuComponent } from './comissoes-menu.component';
import { ComissoesMenuTypesComponent } from './comissoes-menu-types/comissoes-menu-types.component';

const routes: Routes = [
    {
        path: '', component: ComissoesMenuComponent,
        children: [
            { path: '', redirectTo: 'comissoes-types', pathMatch: 'full' },
            { path: 'comissoes-types', component: ComissoesMenuTypesComponent },
            { path: 'comissoes-levels', loadChildren: () => import('./comissoes-menu-levels/comissoes-menu-levels.module').then(m => m.ComissoesMenuLevelsModule) },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ComissoesMenuRoutingModule { }

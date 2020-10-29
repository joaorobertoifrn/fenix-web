import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastrosMenuComponent } from './cadastros-menu.component';
import { CadastrosMenuTypesComponent } from './cadastros-menu-types/cadastros-menu-types.component';

const routes: Routes = [
    {
        path: '', component: CadastrosMenuComponent,
        children: [
            { path: '', redirectTo: 'cadastros-types', pathMatch: 'full' },
            { path: 'cadastros-types', component: CadastrosMenuTypesComponent },
            { path: 'cadastros-levels', loadChildren: () => import('./cadastros-menu-levels/cadastros-menu-levels.module').then(m => m.CadastrosMenuLevelsModule) },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CadastrosMenuRoutingModule { }

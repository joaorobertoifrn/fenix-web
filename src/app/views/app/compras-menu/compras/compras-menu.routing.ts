import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComprasMenuComponent } from './compras-menu.component';
import { ComprasComponent } from './compras/compras.component';

const routes: Routes = [
    {
        path: '', component: ComprasMenuComponent,
        children: [
            { path: '', redirectTo: 'compras', pathMatch: 'full' },
            { path: 'compras', component: ComprasComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ComprasMenuRoutingModule { }

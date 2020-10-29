import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LojaMenuComponent } from './loja-menu.component';
import { LojaComponent } from './loja/loja.component';

const routes: Routes = [
    {
        path: '', component: LojaMenuComponent,
        children: [
            { path: '', redirectTo: 'loja', pathMatch: 'full' },
            { path: 'loja', component: LojaComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LojaMenuRoutingModule { }

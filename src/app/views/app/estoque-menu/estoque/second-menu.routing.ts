import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EstoqueMenuComponent } from './estoque-menu.component';
import { EstoqueComponent } from './estoque/estoque.component';

const routes: Routes = [
    {
        path: '', component: EstoqueMenuComponent,
        children: [
            { path: '', redirectTo: 'estoque', pathMatch: 'full' },
            { path: 'estoque', component: EstoqueComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EstoqueMenuRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TributacaoMenuComponent } from './tributacao-menu.component';
import { TributacaoComponent } from './tributacao/tributacao.component';

const routes: Routes = [
    {
        path: '', component: TributacaoMenuComponent,
        children: [
            { path: '', redirectTo: 'tributacao', pathMatch: 'full' },
            { path: 'tributacao', component: TributacaoComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TributacaoMenuRoutingModule { }

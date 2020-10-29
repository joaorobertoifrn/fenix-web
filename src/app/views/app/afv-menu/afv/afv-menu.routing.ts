import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AfvMenuComponent } from './afv-menu.component';
import { AfvComponent } from './afv/afv.component';

const routes: Routes = [
    {
        path: '', component: AfvMenuComponent,
        children: [
            { path: '', redirectTo: 'afv', pathMatch: 'full' },
            { path: 'afv', component: AfvComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AfvMenuRoutingModule { }

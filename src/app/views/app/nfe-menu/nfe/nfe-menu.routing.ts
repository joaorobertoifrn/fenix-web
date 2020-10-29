import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NfeMenuComponent } from './nfe-menu.component';
import { NfeComponent } from './nfe/nfe.component';

const routes: Routes = [
    {
        path: '', component: NfeMenuComponent,
        children: [
            { path: '', redirectTo: 'nfe', pathMatch: 'full' },
            { path: 'nfe', component: NfeComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NfeMenuRoutingModule { }

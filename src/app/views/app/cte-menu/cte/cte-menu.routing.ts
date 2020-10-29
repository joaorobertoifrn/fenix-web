import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CteMenuComponent } from './cte-menu.component';
import { CteComponent } from './cte/cte.component';

const routes: Routes = [
    {
        path: '', component: CteMenuComponent,
        children: [
            { path: '', redirectTo: 'cte', pathMatch: 'full' },
            { path: 'cte', component: CteComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CteMenuRoutingModule { }

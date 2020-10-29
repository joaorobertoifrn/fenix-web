import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BiMenuComponent } from './bi-menu.component';
import { BiComponent } from './bi/bi.component';

const routes: Routes = [
    {
        path: '', component: BiMenuComponent,
        children: [
            { path: '', redirectTo: 'bi', pathMatch: 'full' },
            { path: 'bi', component: BiComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BiMenuRoutingModule { }

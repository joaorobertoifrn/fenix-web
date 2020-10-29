import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SatMenuComponent } from './sat-menu.component';
import { SatComponent } from './sat/sat.component';

const routes: Routes = [
    {
        path: '', component: SatMenuComponent,
        children: [
            { path: '', redirectTo: 'sat', pathMatch: 'full' },
            { path: 'sat', component: SatComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SatMenuRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GedMenuComponent } from './ged-menu.component';
import { GedComponent } from './ged/ged.component';

const routes: Routes = [
    {
        path: '', component: GedMenuComponent,
        children: [
            { path: '', redirectTo: 'ged', pathMatch: 'full' },
            { path: 'ged', component: GedComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GedMenuRoutingModule { }

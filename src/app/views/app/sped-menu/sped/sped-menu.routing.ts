import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpedMenuComponent } from './sped-menu.component';
import { SpedComponent } from './sped/sped.component';

const routes: Routes = [
    {
        path: '', component: SpedMenuComponent,
        children: [
            { path: '', redirectTo: 'sped', pathMatch: 'full' },
            { path: 'sped', component: SpedComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SpedMenuRoutingModule { }

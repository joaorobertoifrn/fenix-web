import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrmMenuComponent } from './crm-menu.component';
import { CrmComponent } from './crm/crm.component';

const routes: Routes = [
    {
        path: '', component: CrmMenuComponent,
        children: [
            { path: '', redirectTo: 'crm', pathMatch: 'full' },
            { path: 'crm', component: CrmComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CrmMenuRoutingModule { }

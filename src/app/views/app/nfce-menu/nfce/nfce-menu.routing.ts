import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NfceMenuComponent } from './nfce-menu.component';
import { NfceComponent } from './nfce/nfce.component';

const routes: Routes = [
    {
        path: '', component: NfceMenuComponent,
        children: [
            { path: '', redirectTo: 'nfce', pathMatch: 'full' },
            { path: 'nfce', component: NfceComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NfceMenuRoutingModule { }

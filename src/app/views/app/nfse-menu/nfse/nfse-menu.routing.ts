import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NfseMenuComponent } from './nfse-menu.component';
import { NfseComponent } from './nfse/nfse.component';

const routes: Routes = [
    {
        path: '', component: NfseMenuComponent,
        children: [
            { path: '', redirectTo: 'nfse', pathMatch: 'full' },
            { path: 'nfse', component: NfseComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NfseMenuRoutingModule { }

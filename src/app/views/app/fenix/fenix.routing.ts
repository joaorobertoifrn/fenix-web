import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FenixComponent } from './fenix.component';
import { StartComponent } from './start/start.component';

const routes: Routes = [
    {
        path: '', component: FenixComponent,
        children: [
            { path: '', redirectTo: 'start', pathMatch: 'full' },
            { path: 'start', component: StartComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FenixRoutingModule { }

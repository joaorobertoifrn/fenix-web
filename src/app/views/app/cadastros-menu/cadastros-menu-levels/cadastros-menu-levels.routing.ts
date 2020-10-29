import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastrosMenuLevelsComponent } from './cadastros-menu-levels.component';
import { PessoaComponent } from './pessoa/pessoa.component';
import { ClienteComponent } from './cliente/cliente.component';
import { FornecedorComponent } from './fornecedor/fornecedor.component';
import { TransportadoraComponent } from './transportadora/transportadora.component';
import { ContadorComponent } from './contador/contador.component';
import { EstadoCivilComponent } from './estado-civil/estado-civil.component';
import { NivelFormacaoComponent } from './nivel-formacao/nivel-formacao.component';
import { BancoComponent } from './banco/banco.component';

const routes: Routes = [
    {
        path: '', component: CadastrosMenuLevelsComponent,
        children: [
            { path: '', redirectTo: 'pessoa', pathMatch: 'full' },
            { path: 'pessoa', component: PessoaComponent },
            { path: 'cliente', component: ClienteComponent },
            { path: 'fornecedor', component: FornecedorComponent },
            { path: 'transportadora', component: TransportadoraComponent },
            { path: 'contador', component: ContadorComponent },
            { path: 'estado-civil', component: EstadoCivilComponent },
            { path: 'nivel-formacao', component: NivelFormacaoComponent },
            { path: 'banco', component: BancoComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CadastrosMenuLevelsRoutingModule { }

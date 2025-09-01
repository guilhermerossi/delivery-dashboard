import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormEntregaComponent } from './form-entrega/form-entrega.component';
import { DetalheEntregaComponent } from './detalhe-entrega/detalhe-entrega.component';

const routes: Routes = [
  { path: 'nova', component: FormEntregaComponent },
  { path: ':id', component: DetalheEntregaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntregaRoutingModule {}
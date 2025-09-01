import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormEntregaComponent } from './features/entrega/form-entrega/form-entrega.component';
import { DetalheEntregaComponent } from './features/entrega/detalhe-entrega/detalhe-entrega.component';
import { DashboardListComponent } from './features/dashboard/dashboard-list/dashboard-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardListComponent },
  { path: 'nova-entrega', component: FormEntregaComponent },
  { path: 'entrega/:id', component: DetalheEntregaComponent },
  { path: '**', redirectTo: 'dashboard' }, // rota coringa
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

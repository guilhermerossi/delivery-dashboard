import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';
import { FormEntregaComponent } from './form-entrega/form-entrega.component';
import { DetalheEntregaComponent } from './detalhe-entrega/detalhe-entrega.component';
import { DashboardListComponent } from '../dashboard/dashboard-list/dashboard-list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';

@NgModule({
  declarations: [
    FormEntregaComponent,
    DetalheEntregaComponent,
    DashboardListComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    HttpClientModule,
    NgxMaskDirective,
    NgxMaskPipe,
  ],
  exports: [
    DashboardListComponent,
    FormEntregaComponent,
    DetalheEntregaComponent,
  ],
  providers: [provideNgxMask({ dropSpecialCharacters: false })],
})
export class EntregaModule {}

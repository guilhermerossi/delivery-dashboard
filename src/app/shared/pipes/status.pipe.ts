import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'status' })
export class StatusPipe implements PipeTransform {
  transform(value: string, mode: 'label'|'class' = 'label'): string {
    const map: Record<string, { label: string; cls: string }> = {
      'Pendente':  { label: 'Pendente',  cls: 'status-pendente' },
      'Em Rota':   { label: 'Em rota',   cls: 'status-emrota' },
      'Entregue':  { label: 'Entregue',  cls: 'status-entregue' },
      'Cancelada': { label: 'Cancelada', cls: 'status-cancelada' },
    };
    const found = map[value] ?? { label: value, cls: '' };
    return mode === 'class' ? found.cls : found.label;
  }
}

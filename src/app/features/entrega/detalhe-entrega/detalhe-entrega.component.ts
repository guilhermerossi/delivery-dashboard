import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Entrega } from '../../../core/models/entrega.model';
import { EntregaService } from '../../../core/services/entrega.service';

@Component({
  selector: 'app-detalhe-entrega',
  templateUrl: './detalhe-entrega.component.html',
  styleUrls: ['./detalhe-entrega.component.scss'],
})
export class DetalheEntregaComponent implements OnInit {
  entrega: Entrega | null = null;

  historico: { descricao: string; data: Date }[] = [
    { descricao: 'Pedido registrado no sistema', data: new Date('2025-08-28T09:00') },
    { descricao: 'Pedido em preparação', data: new Date('2025-08-28T12:30') },
    { descricao: 'Saiu para entrega', data: new Date('2025-08-29T08:15') },
  ];

  constructor(
    private route: ActivatedRoute,
    private entregaService: EntregaService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.entregaService.getById(Number(id)).subscribe({
        next: (dados) => (this.entrega = dados),
        error: (err) => console.error('Erro ao buscar entrega', err),
      });
    }
  }
}

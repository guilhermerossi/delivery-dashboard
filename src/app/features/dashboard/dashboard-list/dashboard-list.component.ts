import { Component, OnInit } from '@angular/core';
import { Entrega } from '../../../core/models/entrega.model';
import { EntregaService } from '../../../core/services/entrega.service';

@Component({
  selector: 'app-dashboard-list',
  templateUrl: './dashboard-list.component.html',
  styleUrls: ['./dashboard-list.component.scss'],
})
export class DashboardListComponent implements OnInit {
  entregas: Entrega[] = [];
  entregasFiltradas: Entrega[] = [];
  entregasPaginadas: Entrega[] = [];

  busca: string = '';
  filtroStatus: string = '';

  paginaAtual: number = 1;
  itensPorPagina: number = 5;

  constructor(private entregaService: EntregaService) {}

  ngOnInit(): void {
    this.carregarEntregas();
  }

  carregarEntregas(): void {
    this.entregaService.getAll().subscribe((data: Entrega[]) => {
      this.entregas = data;
      this.aplicarFiltros();
    });
  }

  aplicarFiltros(): void {
    this.entregasFiltradas = this.entregas.filter((entrega) => {
      const buscaLower = this.busca.toLowerCase();
      const matchesBusca =
        entrega.cliente.toLowerCase().includes(buscaLower) ||
        entrega.id.toString().includes(buscaLower);

      const matchesStatus =
        !this.filtroStatus || entrega.status === this.filtroStatus;

      return matchesBusca && matchesStatus;
    });

    this.paginaAtual = 1; // resetar página
    this.atualizarPaginacao();
  }

  atualizarPaginacao(): void {
    const inicio = (this.paginaAtual - 1) * this.itensPorPagina;
    const fim = inicio + this.itensPorPagina;
    this.entregasPaginadas = this.entregasFiltradas.slice(inicio, fim);
  }

  mudarPagina(pagina: number): void {
    this.paginaAtual = pagina;
    this.atualizarPaginacao();
  }
}

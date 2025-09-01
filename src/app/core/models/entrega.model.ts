export interface Entrega {
  id: number;
  codigo: string;
  cliente: string;
  dataEnvio: string;
  status: 'Pendente' | 'Em Rota' | 'Entregue' | 'Cancelada';
  endereco: string;
  produto: string;
  observacoes?: string;
}
import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { EntregaService } from './entrega.service';
import { Entrega } from '../models/entrega.model';

describe('EntregaService', () => {
  let service: EntregaService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [EntregaService],
    });
    service = TestBed.inject(EntregaService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('deve retornar lista de entregas', () => {
    const mockEntregas: Entrega[] = [
      {
        id: 1,
        codigo: 'PED001',
        cliente: 'João',
        dataEnvio: new Date().toISOString(),
        status: 'Pendente',
        endereco: 'Rua A',
        produto: 'Notebook',
        observacoes: '',
      },
    ];

    service.getAll().subscribe((entregas) => {
      expect(entregas.length).toBe(1);
      expect(entregas).toEqual(mockEntregas);
    });

    const req = httpMock.expectOne('http://localhost:3000/entregas');
    expect(req.request.method).toBe('GET');
    req.flush(mockEntregas);
  });
});

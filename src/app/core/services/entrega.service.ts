import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Entrega } from '../models/entrega.model';

@Injectable({
  providedIn: 'root'
})
export class EntregaService {
  private apiUrl = 'http://localhost:3000/entregas'; // JSON Server

  constructor(private http: HttpClient) {}

  getAll(): Observable<Entrega[]> {
    return this.http.get<Entrega[]>(this.apiUrl);
  }
  
  getById(id: number): Observable<Entrega> {
    return this.http.get<Entrega>(`${this.apiUrl}/${id}`);
  }
  
  create(entrega: Omit<Entrega, 'id'>): Observable<Entrega> {
    const novaEntrega: Entrega = {
    ...entrega,
    id: Math.floor(Math.random() * 1000000) // 👈 gera um id numérico aleatório
  };
    return this.http.post<Entrega>(this.apiUrl, novaEntrega);
  }
  
  update(id: number, entrega: Partial<Entrega>): Observable<Entrega> {
    return this.http.put<Entrega>(`${this.apiUrl}/${id}`, entrega);
  }
  
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
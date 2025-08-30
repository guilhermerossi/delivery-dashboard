import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheEntregaComponent } from './detalhe-entrega.component';

describe('DetalheEntregaComponent', () => {
  let component: DetalheEntregaComponent;
  let fixture: ComponentFixture<DetalheEntregaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalheEntregaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetalheEntregaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

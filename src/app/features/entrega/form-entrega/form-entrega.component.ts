import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { CepService } from '../../../core/services/cep.service';
import { EntregaService } from '../../../core/services/entrega.service';

@Component({
  selector: 'app-form-entrega',
  templateUrl: './form-entrega.component.html',
  styleUrls: ['./form-entrega.component.scss']
})
export class FormEntregaComponent implements OnInit {

  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private entregaService: EntregaService,
    private cepService: CepService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      cliente: ['', Validators.required],
      cep: [''],
      endereco: ['', Validators.required],
      dataEstimada: ['', [Validators.required, this.futureDateValidator]],
      produto: ['', Validators.required],
      observacoes: [''],
      status: ['Pendente']
    });
  }

  // Validator: data futura
  futureDateValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    if (!value) return null;
    const today = new Date(); today.setHours(0,0,0,0);
    const picked = new Date(value); picked.setHours(0,0,0,0);
    return picked >= today ? null : { pastDate: true };
  }

  // Buscar endereço pelo CEP
  buscarEnderecoPorCep(): void {
    const cep = this.form.get('cep')?.value;
    if (cep) {
      this.cepService.getEndereco(cep).subscribe({
        next: (dados: { erro: any; logradouro: any; bairro: any; localidade: any; uf: any; }) => {
          if (!dados.erro) {
            this.form.patchValue({
              endereco: `${dados.logradouro}, ${dados.bairro}, ${dados.localidade} - ${dados.uf}`
            });
          }
        },
        error: (err: any) => console.error('Erro ao buscar CEP', err)
      });
    }
  }

  // Submit do formulário
  onSubmit(): void {
    if (this.form.valid) {
      this.entregaService.create(this.form.value).subscribe({
        next: () => {
          alert('Entrega cadastrada com sucesso!');
          this.router.navigate(['/entregas']);
        },
        error: (err: any) => console.error('Erro ao salvar entrega', err)
      });
    }
  }
}

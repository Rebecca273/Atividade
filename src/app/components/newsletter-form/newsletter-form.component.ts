import { Component, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { NewsletterService } from '../../services/newsletter.service';
import { BtnPrimaryComponent } from '../btn-primary/btn-primary.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'newsletter-form',
  standalone: true,
  imports: [BtnPrimaryComponent, ReactiveFormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [NewsletterService],
  templateUrl: './newsletter-form.component.html',
  styleUrls: ['./newsletter-form.component.scss']
})
export class NewsletterFormComponent {
  newsletterForm!: FormGroup;
  loading = signal(false);

  constructor(private service: NewsletterService, private fb: FormBuilder) {
    this.newsletterForm = this.fb.group({
      codigoInterno: ['', Validators.required],
      nome: ['', Validators.required],
      observacao: [''],
      dataRegistro: ['', Validators.required],
      dataValidade: ['', Validators.required],
      endereco: ['', Validators.required],
      cep: ['', Validators.required],
      cidade: ['', Validators.required],
      uf: ['', Validators.required],
      pais: ['', Validators.required],
      dddTelefone: ['', [Validators.required, Validators.pattern('^[0-9]{2,3}$')]],
      numeroTelefone: ['', [Validators.required, Validators.pattern('^[0-9]{8,15}$')]],
      email: ['', [Validators.required, Validators.email]],
      website: ['', [Validators.pattern('https?://.+')]],
    });
  }

  onSubmit() {
    this.loading.set(true);

    if (this.newsletterForm.valid) {
      const formData = this.newsletterForm.value;
      console.log('Dados a serem enviados:', formData); // Log dos dados

      this.service.sendData(formData).subscribe({
        next: (response) => {
          console.log('Resposta recebida:', response); // Log da resposta
          this.newsletterForm.reset();
          this.loading.set(false);
          console.log('Dados enviados com sucesso!');
          alert('Dados enviados com sucesso!');
        },
        error: (err) => {
          this.loading.set(false);
          console.error('Erro ao enviar dados:', err);
          console.error('Erro Status:', err.status);
          console.error('Erro Status Text:', err.statusText);
          alert('Erro ao enviar dados. Por favor, tente novamente.'); // Notificação ao usuário
        }
      });
    } else {
      this.loading.set(false);
      console.log('Formulário inválido!');
      alert('Por favor, preencha todos os campos obrigatórios.');
    }
  }
}

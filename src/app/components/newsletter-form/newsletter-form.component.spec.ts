// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// @Component({
//   selector: 'newsletter-form',
//   templateUrl: './newsletter-form.component.html',
//   styleUrls: ['./newsletter-form.component.scss']
  
// })
// export class NewsletterFormComponent {
//   registrationForm: FormGroup;
// loading: any;

//   constructor(private fb: FormBuilder) {
//     this.registrationForm = this.fb.group({
//       codigoInterno: ['', Validators.required],
//       nome: ['', Validators.required],
//       observacao: [''],
//       dataRegistro: ['', Validators.required],
//       dataValidade: ['', Validators.required],
//       endereco: ['', Validators.required],
//       cep: ['', Validators.required],
//       cidade: ['', Validators.required],
//       uf: ['', Validators.required],
//       pais: ['', Validators.required],
//       dddTelefone: ['', [Validators.required, Validators.pattern('^[0-9]{2,3}$')]],
//       numeroTelefone: ['', [Validators.required, Validators.pattern('^[0-9]{8,15}$')]],
//       email: ['', [Validators.required, Validators.email]],
//       website: ['', [Validators.pattern('https?://.+')]],
//     });
//   }

//   onSubmit() {
//     if (this.registrationForm.valid) {
//       const formData = this.registrationForm.value;
//       console.log('Dados do formulário:', formData);
//       // Lógica para enviar os dados
//     } else {
//       console.log('Formulário inválido!');
//     }
//   }
// }

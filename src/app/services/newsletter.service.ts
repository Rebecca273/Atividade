import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { throwError } from 'rxjs';

interface NewsletterResponse {
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class NewsletterService {
  private endpointUrl = '/api/v1/crm/contas/';


  constructor(private http: HttpClient) {}

  sendData(data: {
    codigoInterno: string;
    nome: string;
    observacao?: string;
    dataRegistro: string;
    dataValidade: string;
    endereco: string;
    cep: string;
    cidade: string;
    uf: string;
    pais: string;
    dddTelefone: string;
    numeroTelefone: string;
    email: string;
    website?: string;
  }): Observable<NewsletterResponse> {
    const formattedData = {
      identificacao: {
        cCodInt: data.codigoInterno,
        cNome: data.nome,
        cObs: data.observacao || '',
        dDtReg: data.dataRegistro,
        dDtValid: data.dataValidade,
      },
      endereco: {
        cEndereco: data.endereco,
        cCEP: data.cep,
        cCidade: data.cidade,
        cUF: data.uf,
        cPais: data.pais,
      },
      telefone_email: {
        cDDDTel: data.dddTelefone,
        cNumTel: data.numeroTelefone,
        cEmail: data.email,
        cWebsite: data.website || '',
      }
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // 'Authorization': 'Bearer SEU_TOKEN_AQUI' // Descomente e ajuste se necessário
    });

    return this.http.post<NewsletterResponse>(this.endpointUrl, formattedData, { headers })
      .pipe(
        catchError(err => {
          console.error('Erro ao enviar dados:', err);
          return throwError(err);
        })
      );
  }
}

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CampeonatoService {
  key: string = 'test_b5da7267ff75704abd45e40009611f';

  constructor(private httpClient: HttpClient) { }

  getTabelaSerieB(): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.key}`
    });
    const requestOptions = { headers: headers };
    return this.httpClient.get<any>('https://api.api-futebol.com.br/v1/campeonatos/14/tabela', requestOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  getTimeByPosicao(posicao: number): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.key}`
    });
    return this.httpClient.get<any>(`https://api.api-futebol.com.br/v1/campeonatos/14/tabela`, { headers })
      .pipe(
        map(data => data.find((item: any) => item.posicao === posicao)), // Filtrar pelo índice da posição
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    console.error('An error occurred:', error.message);
    return throwError('Something went wrong; please try again later.');
  }
}

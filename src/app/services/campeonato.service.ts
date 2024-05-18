import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CampeonatoService {
  key: string = 'test_b5da7267ff75704abd45e40009611f' ;

  //Referenciando o module HttpCliente responsável por fazer as requisições na api
  constructor(private httpClient:HttpClient) { }
  //Criando metodo get para receber os dados da api e os obersando-os para retorna-los
  getTabelaSerieB(): Observable<any>{

    //Pegando autorização do headers para ultilizar os dados recebidos
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.key}`
    });

    //Const que irei passar os argumentos que quero ultilizar recebidos da api exp: posição do time
    const requestOptions = { headers: headers};

    //Retornando os dados da api ja observados
    return this.httpClient.get<any>('https://api.api-futebol.com.br/v1/campeonatos/14/tabela', requestOptions)


  }
}

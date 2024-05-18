import { Component, OnInit } from '@angular/core';
import { CampeonatoService } from './services/campeonato.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  //Criando objeto tabela
  tabela!:any;

  //Referenciando a pasta campeonato.service para o uso do método get
  constructor(private campeonatoService:CampeonatoService){}

  //Inicio usando o objeto tabela para receber os dados ja observados da requisição feita com método get na pasta service
  ngOnInit(): void {
    this.tabela = this.campeonatoService.getTabelaSerieB();
  }
}

import { Component, OnInit } from '@angular/core';
import { CampeonatoService } from '../../services/campeonato.service';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-tabela-component',
  templateUrl: './tabela-component.component.html',
  styleUrl: './tabela-component.component.css'
})
export class TabelaComponentComponent {
  isComponentLoaded: boolean = false;

  onDeactivate($event: any) {
    this.isComponentLoaded = false;
  }

  onActivate($event: any) {
    this.isComponentLoaded = true;
  }

  title(title: any) {
    throw new Error('Method not implemented.');
  }
  //Criando objeto tabela
  tabela!: any;

  //Referenciando a pasta campeonato.service para o uso do método get
  constructor(private campeonatoService: CampeonatoService) { }

  //Inicio usando o objeto tabela para receber os dados ja observados da requisição feita com método get na pasta service
  ngOnInit(): void {
    this.tabela = this.campeonatoService.getTabelaSerieB();
    console.log(this.tabela)

  }
}

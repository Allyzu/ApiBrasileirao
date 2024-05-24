import { Component, OnInit } from '@angular/core';
import { CampeonatoService } from '../../services/campeonato.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-time-component',
  templateUrl: './time-component.component.html',
  styleUrls: ['./time-component.component.css']
})
export class TimeComponentComponent implements OnInit {

  time: any;
  errorMessage: string = '';

  constructor(
    private campeonatoService: CampeonatoService,
    private router: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.router.params.subscribe(params => {
      const posicao = +params['posicao'];
      this.time = this.campeonatoService.getTimeById(posicao).subscribe(
        time => {
          if (time) {
            this.time = time;
          } else {
            this.errorMessage = 'Time não encontrado.';
          }
        },
        error => {
          console.error(error);
          this.errorMessage = 'Ocorreu um erro ao carregar os dados do time.';
        }
      );
    });
    };
  }


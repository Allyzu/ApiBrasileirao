import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimeComponentComponent } from './components/time-component/time-component.component';

const routes: Routes = [
  { path: 'time/:posicao', component: TimeComponentComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

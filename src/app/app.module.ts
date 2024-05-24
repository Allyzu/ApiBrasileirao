import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TimeComponentComponent } from './components/time-component/time-component.component';
import { TabelaComponentComponent } from './components/tabela-component/tabela-component.component';

@NgModule({
  declarations: [
    AppComponent,
    TimeComponentComponent,
    TabelaComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

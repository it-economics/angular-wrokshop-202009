import { ChuckNorrisComponent } from './components/chuck-norris/chuck-norris.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './components/hello/hello.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WeatherComponent } from './components/weather/weather.component';
import { NameInputComponent } from './components/name-input/name-input.component';
import { HelloListComponent } from './components/hello-list/hello-list.component';
import { AppIdinterceptorService } from "./services/app-idinterceptor.service";
import { TemperaturPipe } from './pipes/temperatur.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    NameInputComponent,
    HelloListComponent,
    ChuckNorrisComponent,
    WeatherComponent,
    TemperaturPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    NgbModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AppIdinterceptorService, multi: true }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

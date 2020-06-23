import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ApiSimulatorModule } from './../../../api-simulator/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ApiSimulatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

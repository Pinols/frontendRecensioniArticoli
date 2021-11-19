import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticoloComponent } from './articolo/articolo.component';
import { RecensioneComponent } from './recensione/recensione.component';
import {HttpClientModule} from "@angular/common/http";
import { RecensioniarticoloComponent } from './recensioniarticolo/recensioniarticolo.component';
import {recartService} from "./recensioniarticolo/recart.service";

@NgModule({
  declarations: [
    AppComponent,
    ArticoloComponent,
    RecensioneComponent,
    RecensioniarticoloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [recartService],
  bootstrap: [AppComponent]
})
export class AppModule { }

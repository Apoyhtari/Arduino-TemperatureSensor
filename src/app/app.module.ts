import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import {Ng2GoogleChartsModule} from 'ng2-google-charts';

import { ChartsModule } from 'ng2-charts';
import {routing} from "./app.routing";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TempInComponent } from './temp-in/temp-in.component';
import { ChartsComponent } from './charts/charts.component';
import { WebviewDirective } from './webview.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TempInComponent,
    ChartsComponent,
    WebviewDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    MaterialModule,
    Ng2GoogleChartsModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

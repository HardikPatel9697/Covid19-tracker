import { Chart } from 'chart.js';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './Layout/layout/layout.component';
import { HeaderComponent } from './Core/header/header.component';
import { FooterComponent } from './Core/footer/footer.component';
import { HomeComponent } from './Core/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterLayoutComponent } from './Core/footer-layout/footer-layout.component';
import { CountryChartComponent } from './Core/country-chart/country-chart.component';
import { StateChartComponent } from './Core/state-chart/state-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    FooterLayoutComponent,
    CountryChartComponent,
    StateChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

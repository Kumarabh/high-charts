import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { YesterdayCycleChartComponent } from './components/yesterday-cycle-chart/yesterday-cycle-chart.component'
import { HighchartsChartModule } from 'highcharts-angular';
import { ParameterChartComponent } from './components/parameter-chart/parameter-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    YesterdayCycleChartComponent,
    ParameterChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HighchartsChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

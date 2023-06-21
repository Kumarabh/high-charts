import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { YesterdayCycleChartComponent } from './components/yesterday-cycle-chart/yesterday-cycle-chart.component'
import { HighchartsChartModule } from 'highcharts-angular';
import { ParameterChartComponent } from './components/parameter-chart/parameter-chart.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    YesterdayCycleChartComponent,
    ParameterChartComponent,
    PieChartComponent,
    BarChartComponent,
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

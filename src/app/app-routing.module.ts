import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { YesterdayCycleChartComponent } from './components/yesterday-cycle-chart/yesterday-cycle-chart.component';
import { ParameterChartComponent } from './components/parameter-chart/parameter-chart.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path: '', component: AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

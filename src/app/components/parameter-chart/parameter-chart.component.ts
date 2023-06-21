import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-parameter-chart',
  templateUrl: './parameter-chart.component.html',
  styleUrls: ['./parameter-chart.component.css']
})
export class ParameterChartComponent {

  public ngAfterViewInit(): void {
     this.createChartLine();
  }

  private getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }






  private createChartLine(): void {
    let date = new Date();
    let date2 = new Date();

    const data: any[] = [];
    const data2: any[] = [];
    for (let i = 0; i < 10; i++) {

      date.setDate(new Date().getDate() + i);
      date2.setDate(new Date().getDate() + i );

      data.push([`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`, this.getRandomNumber(0, 1000)]);
      data2.push([`${date2.getDate()}/${date2.getMonth() + 1}/${date.getFullYear()}`, this.getRandomNumber(0, 1000)]);

    }

    const chart = Highcharts.chart('chart-line', {
      chart: {
        type: 'line'
      },

      title: {
        text: 'Line Chart',
      },
      credits: {
        enabled: false,
      },
      legend: {
        enabled: true,
      },
      yAxis: {
        title: {
          text: null,
        }
      },
      xAxis: {
        type: 'category',
      },
      tooltip: {
        headerFormat: `<div>Date: {point.key}</div>`,
        pointFormat: `<div>{series.name}: {point.y}</div>`,
        shared: true,
        useHTML: true,
      },
      // ------------------------option 1
      series: [{
        name: 'Amount',
        // data: [['21/6', 500], ['22/6', 500], ['23/6', 700], ['24/6', 500], ['25/6', 500], ['26/6', 500], ['27/6', 500]]
        data
      },
      {
        name: 'Product',
        data: data2
      },

    ],

      // ------------------------option 2
    //   series: [{  
    //     name: 'Quantity',  
    //     data: [500, 700, 555, 444, 777, 877, 944, 567, 666, 789, 456, 654]  
    //  },{  
    //     name: 'Price',  
    //     data: [677, 455, 677, 877, 455, 778, 888, 567, 785, 488, 567, 654]  
    //  }]
    } as any);

    setInterval(() => {

      // -----------------------------option 1
      date.setDate(date.getDate() + 1);
      date2.setDate(date2.getDate() + 1);
      chart.series[0].addPoint([`${date.getDate()}/${date.getMonth() + 1}`, this.getRandomNumber(0, 1000)], true, true);
      chart.series[1].addPoint([`${date2.getDate()}/${date2.getMonth() + 2}`, this.getRandomNumber(0, 1000)], true, true);
     
     // ----------------option 2
      // chart.series[0].addPoint(this.getRandomNumber(0, 1000), true, true)
      // chart.series[1].addPoint(this.getRandomNumber(0, 1000), true, true)
    }, 1500);
  }
}

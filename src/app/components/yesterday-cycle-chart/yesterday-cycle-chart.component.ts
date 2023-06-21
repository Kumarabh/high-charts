import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-yesterday-cycle-chart',
  templateUrl: './yesterday-cycle-chart.component.html',
  styleUrls: ['./yesterday-cycle-chart.component.css']
})
export class YesterdayCycleChartComponent {
  // Highcharts: typeof Highcharts = Highcharts; // required
  // chartConstructor: string = 'chart'; // optional string, defaults to 'chart'
  // chartOptions: Highcharts.Options = { ... }; // required
  chartCallback: Highcharts.ChartCallbackFunction = function (chart) {
    console.log('chart callback function.')
  } // optional function, defaults to null
  // updateFlag: boolean = false; // optional boolean
  // oneToOneFlag: boolean = true; // optional boolean, defaults to false
  // runOutsideAngular: boolean = false; // optional boolean, defaults to false

  Highcharts: typeof Highcharts = Highcharts;

  chartOptions: Highcharts.Options = {
    chart: {
      //  plotBorderWidth: null,
      plotShadow: true,
      renderTo: 'container'
    },
    title: {
      text: `Yesterday's Cycle Count`,
      style: { fontSize: '20px' }
    },
    tooltip: {
      pointFormat: `
      <div style = "padding: 30px">
      Group ID: <b>({point.id})</b> 
      <br> Group Name: {point.name} 
      <br> {series.name}: <b>{point.percentage:.1f}%</b> 
      <br> Well 1: 
      <br> Well 2 
      <br> Well 3
      <br> Well 4
      <br> Well 5
      </div>
      `
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          // enabled: true, // enable true for lines around pie chart to show details
          enabled: false,
        },
        showInLegend: true,

      }
    },
    legend: {
      symbolHeight: 12,
      symbolWidth: 12,
      symbolRadius: 0
    },
    series: [{
      type: 'pie',
      name: `Yesterday's Cycle Count`,
      data: [
        {
          id: '1',
          name: 'Group 1 (0-5)',
          y: 20.0,
          sliced: false,
          selected: false,
          color: 'purple',
          events: {
            click: (e: Highcharts.PointClickEventObject) => {
              console.log('Pie chart quadrant click', e.point.options)
            }
          },
          
        },
        {
          id: '2',
          name: 'Group 2 (6-10)',
          y: 20.0,
          sliced: false,
          selected: false,
          color: 'green'
        },
        {
          id: '3',
          name: 'Group 3 (11-20)',
          y: 20.0,
          sliced: false,
          selected: false,
          color: 'blue'
        },
        {
          id: '4',
          name: 'Group 4 (>20)',
          y: 20.0,
          sliced: false,
          selected: false,
          color: 'pink'
        },
        {
          id: '5',
          name: 'N.A',
          y: 20.0,
          sliced: false,
          selected: false,
          color: 'skyblue'
        },

        // ['Group 3',    12.8],
        // {
        //    name: 'Group 3.5',
        //    y: 12.8,
        //    sliced: false,
        //    selected: true,
        //    color: 'darkgreen'
        // },
      ]
    }]
  };

}

import { Component, ViewChild } from '@angular/core';
import {
    ApexAxisChartSeries,
    ApexChart,
    ApexFill,
    ApexGrid,
    ApexLegend,
    ApexPlotOptions,
    ApexXAxis,
    ChartComponent
} from 'ng-apexcharts';
import { getFontFamily } from '../../../shared/utils/common.util';

export type ChartOptions = {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    fill: ApexFill;
    legend: ApexLegend;
    xaxis: ApexXAxis;
    plotOptions: ApexPlotOptions;
    grid: ApexGrid;
};

@Component({
    selector: 'overview-project-progress',
    templateUrl: './overview-project-progress.component.html',
    styleUrls: ['./overview-project-progress.component.scss']
})
export class OverviewProjectProgressComponent {
    @ViewChild('chart') chart!: ChartComponent;
    public chartOptions!: ChartOptions;

    constructor() {
        this.chartOptions = {
            series: [
                {
                    name: 'Bob',
                    data: [
                        {
                            x: 'Design',
                            y: [new Date('2019-03-05').getTime(), new Date('2019-03-08').getTime()]
                        },
                        {
                            x: 'Code',
                            y: [new Date('2019-03-02').getTime(), new Date('2019-03-05').getTime()]
                        },
                        {
                            x: 'Code',
                            y: [new Date('2019-03-05').getTime(), new Date('2019-03-07').getTime()]
                        },
                        {
                            x: 'Test',
                            y: [new Date('2019-03-03').getTime(), new Date('2019-03-09').getTime()]
                        },
                        {
                            x: 'Test',
                            y: [new Date('2019-03-08').getTime(), new Date('2019-03-11').getTime()]
                        },
                        {
                            x: 'Validation',
                            y: [new Date('2019-03-11').getTime(), new Date('2019-03-16').getTime()]
                        },
                        {
                            x: 'Design',
                            y: [new Date('2019-03-01').getTime(), new Date('2019-03-03').getTime()]
                        }
                    ]
                },
                {
                    name: 'Joe',
                    data: [
                        {
                            x: 'Design',
                            y: [new Date('2019-03-02').getTime(), new Date('2019-03-05').getTime()]
                        },
                        {
                            x: 'Test',
                            y: [new Date('2019-03-06').getTime(), new Date('2019-03-16').getTime()]
                        },
                        {
                            x: 'Code',
                            y: [new Date('2019-03-03').getTime(), new Date('2019-03-07').getTime()]
                        },
                        {
                            x: 'Deployment',
                            y: [new Date('2019-03-20').getTime(), new Date('2019-03-22').getTime()]
                        },
                        {
                            x: 'Design',
                            y: [new Date('2019-03-10').getTime(), new Date('2019-03-16').getTime()]
                        }
                    ]
                },
                {
                    name: 'Dan',
                    data: [
                        {
                            x: 'Code',
                            y: [new Date('2019-03-10').getTime(), new Date('2019-03-17').getTime()]
                        },
                        {
                            x: 'Validation',
                            y: [new Date('2019-03-05').getTime(), new Date('2019-03-09').getTime()]
                        }
                    ]
                }
            ],
            chart: {
                height: 285,
                type: 'rangeBar',
                fontFamily: getFontFamily(),
                toolbar: {
                    show: false
                }
            },
            plotOptions: {
                bar: {
                    horizontal: true,
                    barHeight: '90%',
                    borderRadius: 5
                }
            },
            xaxis: {
                type: 'datetime'
            },
            fill: {
                type: 'gradient'
            },
            legend: {
                position: 'bottom',
                horizontalAlign: 'center'
            },
            grid: {
                show: false,
                padding: {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                }
            }
        };
    }
}
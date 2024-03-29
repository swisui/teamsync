import { CurrencyPipe } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { ChartComponent } from 'ng-apexcharts';
import { SelectItem } from 'primeng/api';
import { ChartOptions } from '../../../models/chart-options.model';

@Component({
    selector: 'project-revenue',
    templateUrl: './project-revenue.component.html',
    styleUrls: ['./project-revenue.component.scss']
})
export class ProjectRevenueComponent {
    @ViewChild('chart')
    public chart!: ChartComponent;
    public chartOptions: ChartOptions;

    public dropdownOptions: Array<SelectItem>;

    constructor() {
        const documentStyle = getComputedStyle(document.documentElement);
        const fontFamily = documentStyle.getPropertyValue('--font-family');
        this.dropdownOptions = [
            { label: 'Day', value: 'day' },
            { label: 'Week', value: 'week' },
            { label: 'Month', value: 'month' }
        ];

        this.chartOptions = <ChartOptions>{
            series: [
                {
                    name: '',
                    data: [3000, 4000, 5000, 3000, 5000, 2500, 3000, 4000, 1000, 3000, 4000, 5000]
                }
            ],
            chart: {
                height: 250,
                type: 'bar',
                toolbar: {
                    show: false
                },
                fontFamily: fontFamily,
                stacked: true,
                background: 'transparent'
            },
            colors: ['#98D8AA', '#3F497F'],
            plotOptions: {
                bar: {
                    columnWidth: '40%',
                    distributed: true,
                    borderRadius: 8,
                    dataLabels: {
                        position: 'top'
                    }
                }
            },
            dataLabels: {
                enabled: false
            },
            legend: {
                show: false
            },
            grid: {
                show: false,
                padding: {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 10
                }
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            yaxis: {
                labels: {
                    formatter: (value: number) => <string>new CurrencyPipe('en').transform(value, 'USD', 'symbol')
                }
            },
            tooltip: {
                theme: 'dark',
                y: {
                    formatter: (val: number) => `${val}K`
                }
            }
        };
    }
}

import { Component } from '@angular/core';
import { DataService } from 'src/app/modules/services/data.service';
import { AgChartOptions } from 'ag-charts-community';

@Component({
  selector: 'app-money-statistics',
  templateUrl: './money-statistics.component.html',
  styleUrls: ['./money-statistics.component.scss']
})
export class MoneyStatisticsComponent {
  apiData: any = {};
  width: number = 0;
  options: AgChartOptions={};

    constructor(private dataService: DataService) {
    this.dataService.apiDataSubject$.subscribe((val) => {
      this.apiData = val;
      this.width = this.apiData?.balance?.payment_done_percentage;
      this.options = {
        // Data: Data to be displayed in the chart
        data: [
          {
            amount: 10,
            month: "Jan",
            totalIncome: 300000,
            totalExpense: 400000,
            totalInvestment: 500000
          },
          {
            amount: 10,
            month: "Feb",
            totalIncome: 360000,
            totalExpense: 640000,
            totalInvestment: 150000
          },
          {
            amount: 20,
            month: "Mar",
            totalIncome: 450000,
            totalExpense: 640000,
            totalInvestment: 540000
          },
          {
            amount: 30,
            month: "Apr",
            totalIncome: 180000,
            totalExpense: 360000,
            totalInvestment: 540000
          },
          {
            amount: 40,
            month: "May",
            totalIncome: 130000,
            totalExpense: 140000,
            totalInvestment: 250000
          },
          {
            amount: 50,
            month: "Jun",
            totalIncome: 180000,
            totalExpense: 360000,
            totalInvestment: 540000
          },
          {
            amount: 60,
            month: "Jul",
            totalIncome: 360000,
            totalExpense: 640000,
            totalInvestment: 150000
          },
          {
            amount: 70,
            month: "Aug",
            totalIncome: 450000,
            totalExpense: 640000,
            totalInvestment: 540000
          },
          {
            amount: 80,
            month: "Sep",
            totalIncome: 130000,
            totalExpense: 140000,
            totalInvestment: 250000
          },
          {
            amount: 90,
            month: "Oct",
            totalIncome: 330000,
            totalExpense: 450000,
            totalInvestment: 570000
          },
          {
            amount: 100,
            month: "Nov",
            totalIncome: 300000,
            totalExpense: 400000,
            totalInvestment: 500000
          },
          {
            amount: 110,
            month: "Dec",
            totalIncome: val?.money_statistics?.total_income?.value,
            totalExpense: this.apiData?.money_statistics?.total_expense?.value,
            totalInvestment: this.apiData?.money_statistics?.total_investment?.value
          },
        ],
        // Series: Defines which chart type and data to use
        series: [
          {
            strokeWidth: 6,
            lineDash: [0,7],
            fill: '#93a6a7',
            stroke: '#93a6a7',
            type: 'bar',
            direction: 'vertical',
            xKey: 'month',
            yKey: 'totalIncome',
            yName: 'Total Income',
          },
          {
            strokeWidth: 6,
            lineDash: [0,7],
            stroke: '#8281a9',
            fill: '#8281a9',
            type: 'bar',
            direction: 'vertical',
            xKey: 'month',
            yKey: 'totalExpense',
            yName: 'Total Expense',
          },
          {
            strokeWidth: 6,
            lineDash: [0,7],
            stroke: '#585e82',
            fill: '#585e82',
            type: 'bar',
            direction: 'vertical',
            xKey: 'month',
            yKey: 'totalInvestment',
            yName: 'Total Investment',
          }
        ],
      };
    });
  }
}

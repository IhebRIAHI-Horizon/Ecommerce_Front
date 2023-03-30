import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  public salesProfitChart: any;
  public salesCategoryChart: any;
  public salesGenderChart: any;
  public salesProfitGlobalChart: any;


  constructor() { }

  ngOnInit(): void {
    this.createSalesProfitChart();
    this.createSalesCategoryChart();
    this.createSalesProfitGlobalChart()
    this.createSalesGenderChart();
  }


  //Chart Sales/Profit
  createSalesProfitChart() {

    this.salesProfitChart = new Chart("sales-profit", {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['2022-05-10', '2022-05-11', '2022-05-12', '2022-05-13',
          '2022-05-14', '2022-05-15', '2022-05-16', '2022-05-17',],
        datasets: [
          {
            label: "Sales",
            data: ['467', '576', '572', '79', '92',
              '574', '573', '576'],
            backgroundColor: '#3e95ee'
          },
          {
            label: "Profit",
            data: ['542', '542', '536', '327', '17',
              '300', '538', '541'],
            backgroundColor: '#3cbe9a'
          }
        ]
      },
      options: {
        aspectRatio: 2.5
      }

    });
  }

  //Chart Sales/Category
  createSalesCategoryChart() {

    this.salesCategoryChart = new Chart("sales-category", {
      type: 'pie',
      data: {
        labels: ["Shirt", "T-shirt", "Dress", "Suit", "Shoes"],
        datasets: [{
          label: "Number of sold products",
          backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
          data: [2478, 5267, 734, 784, 433]
        }]
      },
      options: {
        aspectRatio: 2.5,

      }

    });
  }

  //Chart Sales/Profit Global
  createSalesProfitGlobalChart() {

    this.salesCategoryChart = new Chart("sales-profit-global", {
      type: 'line',
      data: {
        labels: [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
        datasets: [ {
          data: [282, 350, 1122, 1800, 2456, 2632, 947, 1402, 3700, 4867],
          label: "Total Profit",
          borderColor: "#8e5ea2",
          fill: false
        }
        ]
      },
      options: {
        aspectRatio: 2.5,

      }

    });

  }


  //Chart Sales/Gender
  createSalesGenderChart() {

    this.salesCategoryChart = new Chart("sales-gender", {
      type: 'doughnut',
      data: {
        labels: ["Men", "Women"],
        datasets: [{
          label: "Number of sold products",
          backgroundColor: ["#3e95cd", "#c45850"],
          data: [2478, 4267]
        }]
      },
      options: {
        aspectRatio: 2.5,

      }

    });
  }

}

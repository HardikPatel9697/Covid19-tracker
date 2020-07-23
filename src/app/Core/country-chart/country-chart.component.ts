import { Covid19Service } from './../../covid-19.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

export interface Country{
  country : string;
  cases : string;
  deaths : string;
  recovered : string;
  active : string;
}

export class Data {
  PlayerName :string;
  Run:string;
}

@Component({
  selector: 'app-country-chart',
  templateUrl: './country-chart.component.html',
  styleUrls: ['./country-chart.component.scss']
})
export class CountryChartComponent implements OnInit {

  constructor(private covidService : Covid19Service,
             private http: HttpClient) { }

  url : any ="http://api.coronastatistics.live/countries";
  coutry : Country[];
  countryName = [];
  totalCases = [];
  totalDeaths = [];
  totalRecovred = [];
  totalActive = [];
  Linechart = [];

  data: Data[];
  url1 = 'http://localhost:58617/API/Charts/GetCharts';
  Player = [];
  Run = [];
  barchart = [];


  // ngOnInit(): void {
  //   this.getCountryChartData();
  // }

  // getCountryChartData(){
  //   this.covidService.getAllCountryData()
  //   .subscribe((result : Country[]) =>{
  //      result.forEach(element =>{
  //        this.countryName.push(element.country);
  //        this.totalCases.push(element.cases);
  //        this.totalDeaths.push(element.deaths);
  //        this.totalRecovred.push(element.recovered);
  //        this.totalActive.push(element.active);
  //      });
  //      this.Linechart = new Chart('canvas',{
  //       data: {
  //         labels: this.countryName,
  //         datasets: [
  //           {
  //             data: this.totalCases,
  //             borderColor: '#3cb371',
  //             backgroundColor: "#0000FF",
  //           },
  //           {
  //             data: this.totalDeaths,
  //             borderColor: '#3cb371',
  //             backgroundColor: "#0000FF",
  //           },
  //           {
  //             data: this.totalDeaths,
  //             borderColor: '#3cb371',
  //             backgroundColor: "#0000FF",
  //           },
  //           {
  //             data: this.totalRecovred,
  //             borderColor: '#3cb371',
  //             backgroundColor: "#0000FF",
  //           },
  //           {
  //             data: this.totalActive,
  //             borderColor: '#3cb371',
  //             backgroundColor: "#0000FF",
  //           }
  //         ]
  //       },
  //       options: {
  //         legend: {
  //           display: false
  //         },
  //         scales: {
  //           xAxes: [{
  //             display: true
  //           }],
  //           yAxes: [{
  //             display: true
  //           }],
  //         }
  //       }
  //      });
  //   });
  // }

  // ngOnInit() {
  //   this.http.get(this.url).subscribe((result: Data[]) => {
  //     result.forEach(x => {
  //       this.Player.push(x.PlayerName);
  //       this.Run.push(x.Run);
  //     });
  //     this
  //     this.barchart = new Chart('canvas', {
  //       type: 'bar',
  //       data: {
  //         labels: this.Player,
  //         datasets: [
  //           {
  //             data: this.Run,
  //             borderColor: '#3cba9f',
  //             backgroundColor: [
  //               "#3cb371",
  //               "#0000FF",
  //               "#9966FF",
  //               "#4C4CFF",
  //               "#00FFFF",
  //               "#f990a7",
  //               "#aad2ed",
  //               "#FF00FF",
  //               "Blue",
  //               "Red",
  //               "Blue"
  //             ],
  //             fill: true
  //           }
  //         ]
  //       },
  //       options: {
  //         legend: {
  //           display: false
  //         },
  //         scales: {
  //           xAxes: [{
  //             display: true
  //           }],
  //           yAxes: [{
  //             display: true
  //           }],
  //         }
  //       }
  //     });
  //   });
  // }

  ngOnInit() {
    this.http.get(this.url).subscribe((result: Country[]) => {
      result.forEach(x => {
        this.countryName.push(x.country);
        this.totalCases.push(x.cases);
        this.totalDeaths.push(x.deaths);
        this.totalRecovred.push(x.recovered);
        this.totalActive.push(x.active);
      });
      this
      this.Linechart = new Chart('canvas', {
        type: 'line',
        data: {
          labels: this.countryName,
          fontColor: "#FFFFFF",
          datasets: [
            {
              data: this.totalCases,
              borderColor: '#0000FF',
              backgroundColor: "#3cb371",
              label:"Infected"
            },
            {
              data: this.totalDeaths,
              borderColor: '#FF0000',
              backgroundColor: "#3cb371",
              label:"Deaths"
            },
            {
              data: this.totalRecovred,
              borderColor: '#90EE90',
              backgroundColor: "#3cb371",
              label:"Recovred"
            },
            {
              data: this.totalActive,
              borderColor: '#FFFF00',
              backgroundColor: "#3cb371",
              label:"Active"
            },
          ]
        },
        options: {
          spanGaps: true,
          responsive: true,
          title: {
            display: true,
            text: 'WorldWide Country Chart',
            fontColor: "rgba(2,254,40,1)",
            fontSize: 17,
          },
          tooltips: {
            mode: 'index',
            intersect: false,
          },
          hover: {
            mode: 'nearest',
            intersect: true
          },
          legend: {
            labels: {
              fontColor: "#FFFFFF",
              fontSize: 18,
              display: true,
          }
          },
          scales: {
            xAxes: [{
              ticks: {
                fontColor: "white",
                fontSize: 12,
                stepSize: 1,
                beginAtZero: true,
                display: true
              }
            }],
            yAxes: [{
              fontColor: "white",
              fontSize: 12,
              display: true
            }],
          }
        }
      });
    });
  }
}



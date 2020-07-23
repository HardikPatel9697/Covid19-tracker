  import { Chart } from 'chart.js';
  import { Covid19Service } from './../../covid-19.service';
  import { HttpClient } from '@angular/common/http';
  import { Component, OnInit } from '@angular/core';

  export interface State{
    state : string;
    confirmed : string;
    deaths : string;
    recovered : string;
    active : string;
  }

  @Component({
    selector: 'app-state-chart',
    templateUrl: './state-chart.component.html',
    styleUrls: ['./state-chart.component.scss']
  })
  export class StateChartComponent implements OnInit {

    constructor(private covidService : Covid19Service,
                private http: HttpClient) { }

  url : any ="https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise";
  state : State[];
  stateName = [];
  totalConfirmed = [];
  totalDeaths = [];
  totalRecovred = [];
  totalActive = [];
  Linechart = [];

  url1 = 'http://localhost:58617/API/Charts/GetCharts';
  Player = [];
  Run = [];
  barchart = [];


  ngOnInit() {
  this.http.get(this.url).subscribe((result:any) => {
  result.data.statewise.forEach((x) => {
    console.log(x);
  this.stateName.push(x.state);
  this.totalConfirmed.push(x.confirmed);
  this.totalDeaths.push(x.deaths);
  this.totalRecovred.push(x.recovered);
  this.totalActive.push(x.active);
  });
  this
  this.Linechart = new Chart('can', {
  type: 'line',
  data: {
  labels: this.stateName,
  fontColor: "#FFFFFF",
  datasets: [
    {
      data: this.totalConfirmed,
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
    text: 'Indian State Chart',
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



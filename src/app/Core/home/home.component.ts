import { Observable } from 'rxjs';
import { Country } from './../../country.model';
import { Covid19Service } from './../../covid-19.service';
import { Component, OnInit } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private covidService : Covid19Service) { }
  countryData : Country;
  covid19Data : Observable<Country>;
  allCountryData : Observable<any[]>;
  allCountryDataList : any[];
  count = 0;
  todayDeaths = 0;
  todayRecovered = 0;
  critical = 0;
  criticalPerMillion : number = 0;
  ngOnInit() {
    this.getCovid19Data();
    this.getAllCountryData();
  }

  getCovid19Data(){
     this.covid19Data = this.covidService.getAllWorldwideCoviedData();
     this.covid19Data.subscribe(covidData =>{
       this.countryData = covidData;
       console.table(this.countryData);
     })
  }

  getAllCountryData(){
    this.allCountryData = this.covidService.getAllCountryData();
    this.allCountryData.subscribe(countryData =>{
      countryData.forEach(getData =>{
        this.count += getData.todayCases;
        this.todayDeaths += getData.todayDeaths;
        this.todayRecovered += getData.todayRecovered;
        this.critical += getData.critical;
        this.criticalPerMillion += getData.oneTestPerPeople;
        console.log(this.count);
      })
    })
  }

}

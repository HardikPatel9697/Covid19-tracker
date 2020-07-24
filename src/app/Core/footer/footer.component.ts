import { Observable } from 'rxjs';
import { Covid19Service } from './../../covid-19.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private covidService : Covid19Service) { }
  countryList : any[];
  countrylist : any;
  countryName : any;
  isLoading : boolean;
  staictics = "India Statistics";
  staicticsWorld = "World Statistics";
  countryListData : any[];
  countrylistData : any;
  allCountryData : Observable<any[]>;
  allCountryDataList : any[] = [];
  searchCountryName : string;
  searchStateName : string;
  searchCountryData : Observable<any>;
  searchCountryDataList : any;
  allIndiaStateData : Observable<any[]>;
  allIndiaStateDataList : any;
  allIndiaCityDataList : any;
  indianStateName : string;
  ngOnInit() {
    this.getAllCountryList();
    this.getAllCountryData();
    this.getIndiaAllStateCovidData();
  }
  onSelectChangeCountry($event)
  {
        this.countryName = $event;
        console.log(this.countryName);
  }
  getAllCountryList(){
    this.covidService.getAllCountryList()
   .subscribe(countryListData =>{
       this.countryList = countryListData;
       this.countrylist = this.countryList;
       console.table(this.countrylist);
   })
 }

//  getCovidCountryData()
//  {
//     this.covidService.getAllCovidDataByCountry(this.countryName)
//     .subscribe(data =>{
//       this.isLoading = true;
//       this.countryListData = data;
//       this.countrylistData = this.countryListData;
//     })
//  }

 getAllCountryData(){
   this.allCountryData = this.covidService.getAllCountryData();
   this.allCountryData.subscribe((data) =>{
     this.allCountryDataList = data;
   })
 }

 getEnterCountryData($event){

 }

 getEnterStateData($event)
 {
    this.searchStateName = $event;
    //console.log(this.searchCountryName);
  // this.searchCountryData =  this.covidService.getAllCovidDataByCountry(this.searchCountryName);
  this.allIndiaStateData  = this.covidService.getIndiAllStateData();
   this.allIndiaStateData.subscribe((data:any) =>{
         this.allIndiaStateDataList = data.data.statewise.forEach(element => {
                console.log(element);
                console.log(this.searchStateName);
                if(this.searchStateName === element.state){
                    this.allIndiaStateDataList = element;
                }else{
                  console.log("Not Found Data..");
                }
         });
    })
 }

 async getIndiaAllStateCovidData(){
   this.allIndiaStateData  = this.covidService.getIndiAllStateData();
   this.allIndiaStateData.subscribe((data:any) =>{
    this.allIndiaStateDataList = data;
    console.log(this.allIndiaStateDataList);
   })
 }

 getCityData(event, eventState){
   console.log(event);
   this.allIndiaCityDataList = event;
   this.indianStateName = eventState;
 }
}

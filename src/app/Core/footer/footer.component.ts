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

 getCityData(eventState){
   console.log(eventState);
   this.indianStateName = eventState;
   this.covidService.getIndiAllDistrictData()
   .subscribe((value:any) =>{
     if(eventState === value[0].state){
      this.allIndiaCityDataList = value[0].districtData;
     }else if(eventState === value[1].state){
      this.allIndiaCityDataList = value[1].districtData;
     }else if(eventState === value[2].state){
      this.allIndiaCityDataList = value[2].districtData;
     }else if(eventState === value[3].state){
      this.allIndiaCityDataList = value[3].districtData;
     }else if(eventState === value[4].state){
      this.allIndiaCityDataList = value[4].districtData;
     }else if(eventState === value[5].state){
      this.allIndiaCityDataList = value[5].districtData;
     }else if(eventState === value[6].state){
      this.allIndiaCityDataList = value[6].districtData;
     }else if(eventState === value[7].state){
      this.allIndiaCityDataList = value[7].districtData;
     }else if(eventState === value[8].state){
      this.allIndiaCityDataList = value[8].districtData;
     }else if(eventState === value[9].state){
      this.allIndiaCityDataList = value[9].districtData;
     }else if(eventState === value[10].state){
      this.allIndiaCityDataList = value[10].districtData;
     }else if(eventState === value[11].state){
      this.allIndiaCityDataList = value[11].districtData;
     }else if(eventState === value[12].state){
      this.allIndiaCityDataList = value[12].districtData;
     }else if(eventState === value[13].state){
      this.allIndiaCityDataList = value[13].districtData;
     }else if(eventState === value[14].state){
      this.allIndiaCityDataList = value[14].districtData;
     }else if(eventState === value[15].state){
      this.allIndiaCityDataList = value[15].districtData;
     }else if(eventState === value[16].state){
      this.allIndiaCityDataList = value[16].districtData;
     }else if(eventState === value[17].state){
      this.allIndiaCityDataList = value[17].districtData;
     }else if(eventState === value[18].state){
      this.allIndiaCityDataList = value[18].districtData;
     }else if(eventState === value[19].state){
      this.allIndiaCityDataList = value[19].districtData;
     }else if(eventState === value[20].state){
      this.allIndiaCityDataList = value[20].districtData;
     }else if(eventState === value[21].state){
      this.allIndiaCityDataList = value[21].districtData;
     }else if(eventState === value[22].state){
      this.allIndiaCityDataList = value[22].districtData;
     }else if(eventState === value[23].state){
      this.allIndiaCityDataList = value[23].districtData;
     }else if(eventState === value[24].state){
      this.allIndiaCityDataList = value[24].districtData;
     }else if(eventState === value[25].state){
      this.allIndiaCityDataList = value[25].districtData;
     }else if(eventState === value[26].state){
      this.allIndiaCityDataList = value[26].districtData;
     }else if(eventState === value[27].state){
      this.allIndiaCityDataList = value[27].districtData;
     }else if(eventState === value[28].state){
      this.allIndiaCityDataList = value[28].districtData;
     }else if(eventState === value[29].state){
      this.allIndiaCityDataList = value[29].districtData;
     }else if(eventState === value[30].state){
      this.allIndiaCityDataList = value[30].districtData;
     }else if(eventState === value[31].state){
      this.allIndiaCityDataList = value[31].districtData;
     }else if(eventState === value[32].state){
      this.allIndiaCityDataList = value[32].districtData;
     }else if(eventState === value[33].state){
      this.allIndiaCityDataList = value[33].districtData;
     }else if(eventState === value[34].state){
      this.allIndiaCityDataList = value[34].districtData;
     }else if(eventState === value[35].state){
      this.allIndiaCityDataList = value[35].districtData;
     }else if(eventState === value[36].state){
      this.allIndiaCityDataList = value[36].districtData;
     }
     else{

     }
   })
 }
}

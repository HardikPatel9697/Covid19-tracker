import { Country } from "./country.model";
import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable({
  providedIn: "root",
})
export class Covid19Service {
  constructor(private http: HttpClient) {}

  getAllWorldwideCoviedData(): Observable<Country> {
    return this.http.get<Country>(`https://api.coronastatistics.live/all`);
  }

  getAllCountryData():Observable<any[]>{
     return this.http.get<any[]>(`https://api.coronastatistics.live/countries`);
  }

  getAllCovidDataByCountry(name: string): Observable<any> {
    return this.http.get<any>(
      `http://api.coronastatistics.live/countries/${name}`
    );
  }

  getAllCountryList(): Observable<any[]> {
    return this.http.get<any[]>(`https://restcountries.eu/rest/v2/all`);
  }

  getIndiAllDistrictData():Observable<any[]>{
    //let stateName = new HttpParams().set('state', searchStateName);
    return this.http.get<any[]>(`https://api.covid19india.org/v2/state_district_wise.json`);
  }

  // getIndiAllStateData():Observable<any[]>{
  //   return this.http.get<any[]>(`https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise`);
  // }

getIndiAllStateData():Observable<any[]>{
    return this.http.get<any[]>(`https://api.covidindiatracker.com/state_data.json`);
  }

}

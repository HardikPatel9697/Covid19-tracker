import { Country } from "./country.model";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable({
  providedIn: "root",
})
export class Covid19Service {
  constructor(private http: HttpClient) {}

  getAllWorldwideCoviedData(): Observable<Country> {
    return this.http.get<Country>(`http://api.coronastatistics.live/all`);
  }

  getAllCountryData():Observable<any[]>{
     return this.http.get<any[]>(`http://api.coronastatistics.live/countries`);
  }

  getAllCovidDataByCountry(name: string): Observable<any> {
    return this.http.get<any>(
      `http://api.coronastatistics.live/countries/${name}`
    );
  }

  getAllCountryList(): Observable<any[]> {
    return this.http.get<any[]>(`https://restcountries.eu/rest/v2/all`);
  }

  getIndiAllStateData():Observable<any[]>{
    return this.http.get<any[]>(`https://api.covidindiatracker.com/state_data.json`);
  }


}

import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MeteoService {
  constructor(private httpClient: HttpClient) { }
  public getMeteoData(city:String){
    return this.httpClient.get("https://api.openweathermap.org/data/2.5/forecast?q="+city+"&appid=88f101582b11edeaa502a4f0fe10c1f1");
  }
}

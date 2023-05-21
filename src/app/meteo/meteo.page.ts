import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.page.html',
  styleUrls: ['./meteo.page.scss'],
})
export class MeteoPage implements OnInit {
  public city:any;
  public dataMeteo:any;

  constructor(private httpClient:HttpClient) { }

  ngOnInit() {
  }

  onLoadMeteo() {
    this.httpClient.get("https://api.openweathermap.org/data/2.5/forecast?q="+this.city+"&appid=88f101582b11edeaa502a4f0fe10c1f1")
      .subscribe(data=>
      {
        this.dataMeteo=data;
      }, err=>{
        console.log(err)
      })

  }
}

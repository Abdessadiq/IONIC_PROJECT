import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {MeteoService} from "../services/meteo.service";

@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.page.html',
  styleUrls: ['./meteo.page.scss'],
})
export class MeteoPage implements OnInit {
  public city:any;
  public dataMeteo:any;

  constructor(private meteaService:MeteoService) { }

  ngOnInit() {
  }

  onLoadMeteo() {
    this.meteaService.getMeteoData(this.city)
      .subscribe(data=>
      {
        this.dataMeteo=data;
      }, err=>{
        console.log(err)
      })

  }
}

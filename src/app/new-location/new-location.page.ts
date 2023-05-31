import { Component, OnInit } from '@angular/core';
import {Place} from "../model/Place.model";
import {Geolocation} from "@awesome-cordova-plugins/geolocation/ngx";

@Component({
  selector: 'app-new-location',
  templateUrl: './new-location.page.html',
  styleUrls: ['./new-location.page.scss'],
})
export class NewLocationPage implements OnInit {

  public pays:any;

  constructor(private geolocation:Geolocation) { }

  ngOnInit() {
  }


  onAddLocation(data: Place) {
    data.timestimp= new Date().getTime();
    data.photos=[];

    this.geolocation.getCurrentPosition().then((resp)=>{
      data.coordinates={
        latitude:resp.coords.latitude,
        longitude:resp.coords.longitude

      }
      this.pays=resp.timestamp;
      console.log(data);
      console.log(this.pays);
    })

  }
}

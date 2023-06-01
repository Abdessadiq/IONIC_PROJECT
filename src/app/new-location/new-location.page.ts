import { Component, OnInit } from '@angular/core';
import {Place} from "../model/Place.model";
import {Geolocation} from "@awesome-cordova-plugins/geolocation/ngx";
import {LocationsService} from "../services/locations.service";
import {Router} from "@angular/router";
import {NavController} from "@ionic/angular";

@Component({
  selector: 'app-new-location',
  templateUrl: './new-location.page.html',
  styleUrls: ['./new-location.page.scss'],
})
export class NewLocationPage implements OnInit {
  //public pays:any;
  constructor(private geolocation:Geolocation, private serviceLocation:LocationsService, private navCtrl:NavController) { }

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
      this.serviceLocation.addLocation(data);
      //this.router.navigateByUrl('menu/location')
      this.navCtrl.back();
      //console.log(data);
    })


  }
}

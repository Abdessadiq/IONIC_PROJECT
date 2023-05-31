import { Component, OnInit } from '@angular/core';
import {LocationsService} from "../services/locations.service";
import {Place} from "../model/Place.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-locations',
  templateUrl: './locations.page.html',
  styleUrls: ['./locations.page.scss'],
})
export class LocationsPage implements OnInit {
  public locations:any;

  constructor(private locationServices: LocationsService, private router:Router) {

  }

  ngOnInit() {


  }
  public ionViewWillEnter(){
    this.locationServices.loadLocations().then(data=>{
      this.locations = data;
    })
  }
  getLocation(){
  }

  onNewLocation() {
    this.router.navigateByUrl('menu/new-location');

  }
}

import { Component, OnInit } from '@angular/core';
import {LocationsService} from "../services/locations.service";
import {Place} from "../model/Place.model";

@Component({
  selector: 'app-locations',
  templateUrl: './locations.page.html',
  styleUrls: ['./locations.page.scss'],
})
export class LocationsPage implements OnInit {
  public locations:Array<Place>=[];
  constructor(private locationServices: LocationsService) { }

  ngOnInit() {
    this.getLocation();

  }
  getLocation(){
    this.locations=this.locationServices.getLocations();
  }

}

import { Component, OnInit } from '@angular/core';
import {LocationsService} from "../services/locations.service";
import {Place} from "../model/Place.model";

@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.page.html',
  styleUrls: ['./location-details.page.scss'],
})
export class LocationDetailsPage implements OnInit {
  public place: any;

  constructor(private locationService:LocationsService) { }

  ngOnInit() {
    this.place = this.locationService.currentLocation;
  }

}

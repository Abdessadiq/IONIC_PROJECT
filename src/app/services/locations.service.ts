import { Injectable } from '@angular/core';
import {Place} from "../model/Place.model";

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  public  locations:Array<Place>=[];
  constructor() {
    this.locations.push({title:"A"});
    this.locations.push({title:"B"});
    this.locations.push({title:"C"});
  }
  public getLocations(){
    return this.locations;
  }
  public addLocation(place:Place){
    this.locations.push(place);
  }
}

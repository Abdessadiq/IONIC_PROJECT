import { Injectable } from '@angular/core';
import {Place} from "../model/Place.model";
import {Storage} from "@ionic/storage-angular";

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  public  locations:Array<Place>=[];
  constructor(private storage: Storage) {
    this.locations.push({title:"A"});
    this.locations.push({title:"B"});
    this.locations.push({title:"C"});
  }
  public getLocations(){
    return this.storage.get("locations").then(result=>{
      this.locations = result!=null?result:[];
      return this.locations.slice();
    })
  }
  public addLocation(place:Place){
    this.locations.push(place);
    this.storage.set("locations", this.locations)
  }
}

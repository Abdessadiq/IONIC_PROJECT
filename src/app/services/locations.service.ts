import { Injectable } from '@angular/core';
import {Place} from "../model/Place.model";
import {Storage} from "@ionic/storage-angular";

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  public  locations:Array<Place>=[];


  // Injectez le plugin Ionic Storage dans votre composant ou service
  constructor(private storage: Storage) {
    // Appelez la méthode initStorage() pour initialiser la base de données
     this.initStorage();

  }

  private async initStorage() {
    await this.storage.create();
  }
  public loadLocations(){
    return this.storage.get("locations").then(result=>{
      this.locations = result != null ? result : [];
      return this.locations.slice();
    })
  }
  public addLocation(place:Place){
    this.locations.push(place);
    this.storage.set("locations", this.locations)
  }



  public updateLocation(locations:any) {
    this.storage.set("locations", locations);
  }
}

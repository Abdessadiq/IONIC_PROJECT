import { Component, OnInit } from '@angular/core';
import {LocationsService} from "../services/locations.service";
import {Place} from "../model/Place.model";
import {Router} from "@angular/router";
import {AlertController} from "@ionic/angular";

@Component({
  selector: 'app-locations',
  templateUrl: './locations.page.html',
  styleUrls: ['./locations.page.scss'],
})
export class LocationsPage implements OnInit {
  public locations:any;

  constructor(private locationServices: LocationsService, private router:Router, private alertController:AlertController) {

  }

  ngOnInit() {


  }
  public ionViewWillEnter(){
  this.onGetLocation();
  }
  getLocation(){
  }

  onNewLocation() {
    this.router.navigateByUrl('menu/new-location');

  }

  async onRemove(place: Place) {

      const alert = await this.alertController.create({

        header: 'Confirmation',
        message: 'Are you sure you want to delete ? ',
        cssClass: 'alert-button-confirm',
        buttons: [{
          text:'Yes',
          handler:() =>{
            this.removeLocation(place);
            //this.onGetLocation();
          }
        },{
          text:'Cancel',
          cssClass: 'alert-button-cancel',
          handler:()=>{
            // Do Nothing..
          }
        }],
      });

      await alert.present();


  }

  private onGetLocation() {
    this.locationServices.loadLocations().then(data=>{
      this.locations = data;
    })
  }

  private removeLocation(place: Place) {
    const index=this.locations.indexOf(place);
    this.locations.splice(index, 1);
    this.locationServices.updateLocation(this.locations);
  }
}

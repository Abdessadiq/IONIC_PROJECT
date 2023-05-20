import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "../services/authentication.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {


  constructor(private router:Router, private authServices: AuthenticationService) { }
  public menus= [
    {title:"Home", url:"/menu/home", icon:"home-outline"},
    {title:"Meteo", url:"/menu/meteo", icon:"thermometer-outline"},
    {title:"Location", url:"/menu/location", icon:"locate-outline"},
    {title:"Gallery", url:"/menu/gallery", icon:"images-outline"},
    {title:"Logout", url:"logout", icon:"log-out-outline"}
  ];
  ngOnInit() {
  }

  onMenuAction(m: any) {
    if (m.url=='logout'){
      this.authServices.logout();
      this.router.navigateByUrl('/login')

    }else
    this.router.navigateByUrl(m.url)


  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {


  constructor() { }
  public menus= [
    {title:"Home", url:"/menu/home", icon:"home-outline"},
    {title:"Meteo", url:"/menu/meteo", icon:"thermometer-outline"},
    {title:"location", url:"/menu/location", icon:"locate-outline"},
    {title:"Gallery", url:"/menu/gallery", icon:"images-outline"},
    {title:"Logout", url:"/menu/login", icon:"log-out-outline"}
  ];
  ngOnInit() {
  }

  onMenuAction(m: any) {

  }
}

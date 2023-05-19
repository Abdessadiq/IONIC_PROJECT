import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public contact={
    name: "FST SETTAT CIGMA",
    tel: "0547879292",
    mail:"scoole@cigma.org",
    location:"/assets/images/loc.png",
    logo:"/assets/images/logo.png",

  }

  constructor() {}

}

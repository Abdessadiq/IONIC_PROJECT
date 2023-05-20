import { Component } from '@angular/core';
import {Platform} from "@ionic/angular";
import {Router} from "@angular/router";
import {AuthenticationService} from "./services/authentication.service";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private platform: Platform, private  route:Router, private authService: AuthenticationService) {
    this.initializeApp();

  }

  private initializeApp() {
    this.platform.ready().then(()=>{
      this.login();
    })

  }

  private login() {
    let result=this.authService.loadToken()
    if (result){
    this.route.navigateByUrl('/menu')

    } else
    this.route.navigateByUrl('/login')

  }
}

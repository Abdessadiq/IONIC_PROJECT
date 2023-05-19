import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public authenticated:boolean=false;

  constructor() { }
  public login(username:String, password:String){
    if (username=='ABDESSADIQ'&&password=='BABAHAMOU'){
      this.authenticated = true ;

    } else {
      this.authenticated= false;
    }
    return this.authenticated;
  }
}

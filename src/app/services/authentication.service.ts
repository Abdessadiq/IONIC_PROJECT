import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public authenticated:boolean=false;
  public token:any;

  constructor() { }
  public login(username:String, password:String){
    if (username=='ABDESSADIQ'&&password=='BABAHAMOU'){
      this.authenticated = true ;
      this.saveToken();

    } else {
      this.authenticated= false;
    }
    return this.authenticated;
  }

  private saveToken() {
    this.token="thisIsToken";
    localStorage.setItem("myToken", this.token)

  }
  public  loadToken(){
    this.token = localStorage.getItem("myToken");
    if (this.token=='thisIsToken')
    {
      this.authenticated=true;
    }
    else {
      this.authenticated=false;
    }
    return this.authenticated;

  }

  logout() {
    localStorage.removeItem('myToken')
  }
}

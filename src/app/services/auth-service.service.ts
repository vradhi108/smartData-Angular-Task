import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private router: Router) { }
 isAuthenticated:boolean = false;

  login(username: any, password: any) {
    if (username == 'vradhi108' && password == 'Vradhi@2003') {
      localStorage.setItem('Token','Vradhi')
      this.isAuthenticated = true;
      this.router.navigate(['/userpage']);
    } 
    else{
      this.router.navigate(['/login']);
      this.isAuthenticated = false;
    }
    console.log(this.isAuthenticated);
  }

  isAuthenticatedUser() {
    console.log("this is called by authguard");
    return this.isAuthenticated;
  }

  logout(){
    this.isAuthenticated=false;
    localStorage.removeItem('Token');
  }
}

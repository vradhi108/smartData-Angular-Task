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
  isAdminAuthenticated = false;

  adminLogin(username: any, password: any){
    if (username == 'admin' && password == 'Pass@123'){
      localStorage.setItem('AdminToken','Admin')
      this.isAdminAuthenticated = true;
      this.router.navigate(['/addusers']);
    }
    else{
      this.router.navigate(['./adminlogin']);
    }
  }

  isAuthenticatedAdmin(){
    return this.isAdminAuthenticated;
  }

  logout(){
    this.isAuthenticated=false;
    localStorage.removeItem('Token');
  }

  logoutAdmin(){
    this.isAdminAuthenticated= false;
    localStorage.removeItem('AdminToken');
    this.router.navigate(['/adminlogin']);
  }
}

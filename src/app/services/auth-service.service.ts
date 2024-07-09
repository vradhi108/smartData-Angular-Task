import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectAPIService } from './connect-api.service';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private router: Router, private api: ConnectAPIService) { }
  isAuthenticated:boolean = false;
  dbresponse: any
  
  login(username: any, password: any) {
    this.api.checkuser(username, password).subscribe(res => {
      console.log('this is ers',res);
      // how to check the res value;
      if (res) {
        localStorage.setItem('Token','Vradhi')
        this.isAuthenticated = true;
        this.router.navigate(['/userpage']);
      } 
      else{
        alert('Wrong credentials')
        this.router.navigate(['/login']);
        this.isAuthenticated = false;
      }
    });
    
    
    console.log(this.isAuthenticated);
  }

  isAuthenticatedUser() {
    console.log("this is called by authguard");
    return this.isAuthenticated;
  }
  isAdminAuthenticated = false;

  adminLogin(username: any, password: any){
    this.api.checkadmin(username,password).subscribe(res =>{
      console.log('from admin login',res);
      if (res){
        localStorage.setItem('AdminToken','Admin')
        this.isAdminAuthenticated = true;
        this.router.navigate(['/addusers']);
      }
      else{
        alert('Wrong Credentials');
        this.router.navigate(['/adminlogin']);
      }
    });
   
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
data: any;

sellerAuthentication = false;
  sellerLogin(username: any, password: any){
    this.api.getseller(username).subscribe(res=>{
      this.data = res;
      console.log('this is my dtaaa',this.data[0])
      if(this.data[0].status){
        if (username == this.data[0].userid && password == this.data[0].sellerpassword){
          this.sellerAuthentication = true;
          var tokenseller = "sellertoken";
          localStorage.setItem('sellertoken', tokenseller);
          this.router.navigate(['/sellerprofile'], { queryParams: { id: username } });
        }
        else{
          alert('Invalid credentials')
        }
      }
      else{
        alert('user is inactive')
      }
    });
  }
  
  isAuthenticatedSeller(){
    return this.sellerAuthentication;
  }
}

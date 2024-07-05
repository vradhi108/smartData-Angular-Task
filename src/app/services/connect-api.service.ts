import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ConnectAPIService {

  constructor(private http: HttpClient) { }

  adduser(user: any){
    return this.http.post('https://localhost:7190/api/UserRegistration', user);
  }

  checkuser(email: any, password: any){
    return this.http.get('https://localhost:7190/api/UserRegistration/'+email+'/'+password);
  }

  checkadmin(username: any, password: any){
    return this.http.get('https://localhost:7190/api/Admin/'+username+'/'+password);
  }

  addseller(seller: any){
    return this.http.post('https://localhost:7190/api/SellerRegistration', seller);
  }

  getsellers(){
    return this.http.get('https://localhost:7190/api/SellerRegistration');
  }
}

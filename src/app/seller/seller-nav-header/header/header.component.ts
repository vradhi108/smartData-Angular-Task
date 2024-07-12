import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectAPIService } from 'src/app/services/connect-api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  sellerid: any;
  xsellerid:any
  useridstring: any;
  xuseridstring: any;
  getid:any;
  constructor(private route: Router, private api: ConnectAPIService){
    this.xsellerid = localStorage.getItem('sellerid');
    this.sellerid = JSON.parse(this.xsellerid)

    this.xuseridstring = localStorage.getItem('useridstring');
    this.useridstring = JSON.parse(this.xuseridstring);
  }
  

  addCollection(){
    this.route.navigate(['/addcollection'], {queryParams: {id: this.sellerid}});
  }

  viewProfile(){
    this.route.navigate(['/sellerprofile'], {queryParams: {id: this.useridstring}});
  }

  collections: any;
  products: any;
  viewProducts(){
    this.route.navigate(['/showproducts'], {queryParams: {id: this.sellerid}});
  }

  contactUs(){

  }


  logout(){
    this.route.navigate(['/sellerlogin']);
    localStorage.removeItem('sellertoken');
  }
}

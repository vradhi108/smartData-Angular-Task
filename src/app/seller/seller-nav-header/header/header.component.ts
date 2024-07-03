import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private route: Router){
    this.getid = localStorage.getItem('sellerid');
    this.id = this.getid?JSON.parse(this.getid): '';

  }
  id: any;
  getid:any;

  addCollection(){
    this.route.navigate(['/addcollection'], {queryParams: {id: this.id}});
  }

  viewProfile(){
    this.route.navigate(['/sellerprofile'], {queryParams: {id: this.id}})
  }

  viewProducts(){

  }

  contactUs(){

  }


  logout(){
    this.route.navigate(['/sellerlogin']);
    localStorage.removeItem('sellertoken');
  }
}

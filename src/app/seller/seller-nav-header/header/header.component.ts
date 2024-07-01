import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private route: Router){};
  
  addCollection(){
    this.route.navigate(['/addcollection']);
  }

  viewProfile(){
    this.route.navigate(['/sellerprofile'])
  }

  contactUs(){

  }

  logout(){
    this.route.navigate(['/sellerlogin']);
    localStorage.removeItem('sellertoken');
  }
}

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sellerprofile',
  templateUrl: './sellerprofile.component.html',
  styleUrls: ['./sellerprofile.component.scss']
})
export class SellerprofileComponent {
  constructor(private route: ActivatedRoute){};
  id: any;
  getsellers: any;
  sellers: any;
  mysellers: any;
  ngOnInit(){
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
      console.log('ID from query params:', this.id);
    });

    // if (localStorage.getItem('sellers') === null) localStorage.setItem('sellers', JSON.stringify(this.getsellers));
    this.getsellers = localStorage.getItem('sellers');
    this.mysellers = this.getsellers? JSON.parse(this.getsellers): null;
    

      this.mysellers.forEach((element: { userid: any; firstname: any; lastname: any; emailid: any; phonenumber: any; sellerpassword: any; status: any;}) => {
        if (element.userid === this.id){
          this.sellers = element;
        }
      });
  }

  
}

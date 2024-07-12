import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConnectAPIService } from 'src/app/services/connect-api.service';
@Component({
  selector: 'app-sellerprofile',
  templateUrl: './sellerprofile.component.html',
  styleUrls: ['./sellerprofile.component.scss']
})
export class SellerprofileComponent {
  constructor(private route: ActivatedRoute, private api: ConnectAPIService){};
  userid: any;
  getsellers: any;
  sellers: any;
  mysellers: any;
  ngOnInit(){
    this.route.queryParams.subscribe(params => {
      this.userid = params['id'];
      console.log('ID from query params:', this.userid);
    });
    this.api.getseller(this.userid).subscribe(res=>{
      this.sellers = res;
        localStorage.setItem('sellerid', JSON.stringify(this.sellers[0].id));
        localStorage.setItem('useridstring', JSON.stringify(this.userid));
    
      console.log('this is my res for sellers',res)
    })
    
    

      this.mysellers.forEach((element: { userid: any; firstname: any; lastname: any; emailid: any; phonenumber: any; sellerpassword: any; status: any;}) => {
        if (element.userid === this.userid){
          this.sellers = element;
        }
      });
  }

  
}

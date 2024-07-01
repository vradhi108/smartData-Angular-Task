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
  ngOnInit(){
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
      console.log('ID from query params:', this.id);
      // Now you can use the id as needed in your component
  });

  this.getsellers = localStorage.getItem('sellers');
      this.getsellers = this.getsellers? JSON.parse(this.getsellers): null;
    

      // this.getusers.forEach((element: { userid: any; firstname: any; lastname: any; emailid: any; phonenumber: any; sellerpassword: any; status: any;}) => {
      //   if (element.userid === this.form.value.username  && element.sellerpassword === this.form.value.password){
      //     this.rightCredentials = true;
      //     if (element.status === 1){
      //       this.router.navigate(['/sellerprofile'], { queryParams: {id: this.form.value.username}});
      //       var token = 'sellerloginadsfjaldasfdf';
      //       localStorage.setItem('sellertoken', token);
      //     }
      //     else{
      //       alert('Not an active seller.')
      //     }
          
      //   }
      // });
  }

  
}

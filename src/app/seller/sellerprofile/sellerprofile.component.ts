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
  
  ngOnInit(){
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
      console.log('ID from query params:', this.id);


      // Now you can use the id as needed in your component
  });
  }

  
}

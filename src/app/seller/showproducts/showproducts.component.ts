import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConnectAPIService } from 'src/app/services/connect-api.service';

@Component({
  selector: 'app-showproducts',
  templateUrl: './showproducts.component.html',
  styleUrls: ['./showproducts.component.scss']
})
export class ShowproductsComponent {
  constructor(private api: ConnectAPIService, private route: ActivatedRoute){}

  sellerid: any;
  collections: any;
  products: any;
  ngOnInit(){
    this.route.queryParams.subscribe(params => {
      this.sellerid = params['id'];

    })

    this.api.GetProductsFromSeller(this.sellerid).subscribe(res=>{
      this.products = res;
    })
  }
}

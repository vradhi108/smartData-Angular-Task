import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ConnectAPIService } from 'src/app/services/connect-api.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  constructor(private route: ActivatedRoute, private api: ConnectAPIService, private router: Router){}
  cid: any;
  pid: any;
  product: any[]=[]
  collections: any;
  ngOnInit(){
    this.route.queryParams.subscribe(params => {
      this.cid = params['cid'];
      this.pid = params['pid'];
    });

    this.api.GetProductById(this.pid).subscribe(res=>{
      this.product.push(res);
      console.log('product', this.product)
    })

    this.api.GetCollections().subscribe(res=>{
      console.log(res);
      this.collections = res;
    })


  }
  showDropdown = false;

  buy(){

  }

  gotocollections(collections: any, id: any){
    this.router.navigate(['/collections'], {queryParams: {collection: collections,id: id}});
  }
}

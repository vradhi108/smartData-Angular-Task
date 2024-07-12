import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ConnectAPIService } from 'src/app/services/connect-api.service';

interface Item {
  productid: string;
  name: string;
  type: string;
  source: string;
  quantity: string;
  description: string;
  price: string;
  custom: [];
}

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent {
product_id: any;
  constructor(private router: ActivatedRoute, private route: Router, private api: ConnectAPIService){}
  title: any;
  category: any;
  id: any;
  cid: any;
  temp: any;
  ngOnInit(){
    this.router.queryParams.subscribe(params => {
      // this.title = params['title'];
      this.category = params['category'];
      this.id = params['id'];
      this.cid = params['cid'];
      console.log(this.category);
    });

    this.api.GetProducts(this.cid).subscribe(res=>{
      this.items = res;
    })


    console.log('my inserted items recently',this.items);
  }

  productid: any;
  seller: any[]=[]
  name: any;
  type: any;
  source: any;
  description: any;
  items: any;



  addItem() {
    this.route.navigate(['/additemdetails'], { queryParams: {sellerid: this.id, cid: this.cid} });
    console.log(this.title)
  }
  edit(product_id: any){
    this.route.navigate(['/additemdetails'], { queryParams: {Id: product_id, edit: 1, collection_name: this.category, sellerid: this.id} });
  }
}

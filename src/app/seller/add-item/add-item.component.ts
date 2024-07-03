import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

interface Item {
  productid: string;
  name: string;
  type: string;
  source: string;
  description: string;
  price: string;
}

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent {
product_id: any;
  constructor(private router: ActivatedRoute, private route: Router){}
  title: any;
  category: any;
  id: any;
  ngOnInit(){
    this.router.queryParams.subscribe(params => {
      // this.title = params['title'];
      this.category = params['category'];
      this.id = params['id'];
      console.log(this.category);
    });


    if (localStorage.getItem(this.category+'_collection') == null) localStorage.setItem(this.category+'_collection', JSON.stringify(this.items));
    let getcollections = localStorage.getItem(this.category+'_collection');
    this.items = getcollections? JSON.parse(getcollections): null;

    this.productid = this.generateRandomId();
    console.log(this.items);
  }

  productid: any;
  name: any;
  type: any;
  source: any;
  description: any;
  items: Item[] = [];

  generateRandomId(): string {
    const randomNumber = Math.floor(Math.random() * 10000);
    const timestamp = Date.now();
    const randomId = 'id_' + randomNumber + '_' + timestamp;
    return randomId;
  }

  addItem() {
    
    this.route.navigate(['/additemdetails'], { queryParams: {Id: this.productid, sellerid: this.id} });

    // not needed here.
    
    
   
   console.log(this.title)
  }
  edit(product_id: any){
    this.route.navigate(['/additemdetails'], { queryParams: {Id: product_id, edit: 1, collection_name: this.category, sellerid: this.id} });
  }
}

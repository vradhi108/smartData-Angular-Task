import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

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


    if (localStorage.getItem('collections') == null) localStorage.setItem('collections', JSON.stringify(this.seller));
    let getcollections = localStorage.getItem('collections');
    this.seller = getcollections? JSON.parse(getcollections): null;
    this.seller.forEach((element: {title: any; source: any; description: any; item:{productid: any; name: any;
      type: any; source: any; quantity: any;description: any;price: any;custom: any;
    }}) => {

      if(element.title === this.category){
        this.items.push(element.item);
      }

    });
    this.productid = this.generateRandomId();
    console.log('my inserted items recently',this.items);
  }

  productid: any;
  seller: any[]=[]
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

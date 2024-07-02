import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface Item {
  productid: string;
  name: string;
  type: string;
  source: string;
  description: string;
}

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent {
  constructor(private router: ActivatedRoute){}
  title: any;
  ngOnInit(){
    this.router.queryParams.subscribe(params => {
      this.title = params['title'];
    });


    if (localStorage.getItem(this.title+'_collections') == null) localStorage.setItem(this.title+'_collections', JSON.stringify(this.items));
    let getcollections = localStorage.getItem(this.title+'_collections');
    this.items = getcollections? JSON.parse(getcollections): null;
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
    this.productid = this.generateRandomId();
    this.name = prompt('Enter the name of your product');
    this.source = prompt('Enter the source of the image');
    this.type = prompt('Enter the type of your product or the category')
    this.description = prompt('Enter description of your collection');
    this.items.push({
      productid: this.productid,
      name: this.name,
      type: this.type,
      source: this.source,
      description: this.description
    });
    localStorage.setItem(this.title+'_collection', JSON.stringify(this.items));
    let getitems = localStorage.getItem(this.title+'_collection');
    this.items = getitems? JSON.parse(getitems): null;
    
   
   console.log(this.title)
  }
  edit(){

  }
}

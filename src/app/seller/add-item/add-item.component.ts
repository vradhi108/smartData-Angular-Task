import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

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
  constructor(private router: ActivatedRoute, private route: Router){}
  title: any;
  ngOnInit(){
    this.router.queryParams.subscribe(params => {
      this.title = params['title'];
    });


    if (localStorage.getItem(this.title+'_collections') == null) localStorage.setItem(this.title+'_collections', JSON.stringify(this.items));
    let getcollections = localStorage.getItem(this.title+'_collections');
    this.items = getcollections? JSON.parse(getcollections): null;

    this.productid = this.generateRandomId();
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
    
    this.route.navigate(['/additemdetails'], { queryParams: {Id: this.productid} });

    // not needed here.
    
    
   
   console.log(this.title)
  }
  edit(){
    this.route.navigate(['/additemdetails'], { queryParams: {Id: this.productid, edit: 1} });
  }
}

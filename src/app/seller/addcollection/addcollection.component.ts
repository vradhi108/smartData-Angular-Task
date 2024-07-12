import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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

interface Card {
  title: string;
  source: string;
  description: string;
  sellerid: number;
}
@Component({
  selector: 'app-addcollection',
  templateUrl: './addcollection.component.html',
  styleUrls: ['./addcollection.component.scss']
})
export class AddcollectionComponent {
  constructor(private route: Router, private router: ActivatedRoute, private api: ConnectAPIService){}
  id: any;
  ngOnInit(){
    this.router.queryParams.subscribe(params => {
      this.id = params['id'];
      console.log('ID from query params:', this.id);
    });

    this.api.GetCollection(this.id).subscribe(res=>{
      console.log(res);
      this.cards = res;
   
    })


    
  }
  title: any;
  source: any;
  description: any;
  cards: any;
  insertitem: Item[]=[];
  temp: any;
  createCollection() {
    this.title = prompt('Enter the name of your collection');
    this.source = prompt('Enter the source of the image');
    this.description = prompt('Enter description of your collection');
    let cards = ({
      title: this.title,
      source: this.source,
      description: this.description,
      sellerid: this.id
    });
    this.api.AddCollection(cards).subscribe(res=>{
      console.log(res);
      this.api.GetCollection(this.id).subscribe(cltn=>{
        this.cards = cltn;
        
      })
    })

    

   console.log(this.title)
  }

  addItem(title: any, clid: any){
    this.route.navigate(['/additem'], {queryParams: {category: title, id: this.id, cid: clid}});
  }

  DeleteCollection(id: number){
    this.api.DeleteCollectionAPI(id).subscribe(res => {
      console.log(res);
      this.api.GetCollection(this.id).subscribe(cltn=>{
        this.cards = cltn;
      })
    })
  }

}

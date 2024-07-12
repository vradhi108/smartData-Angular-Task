import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConnectAPIService } from 'src/app/services/connect-api.service';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.scss']
})
export class CollectionsComponent {
  constructor(private api: ConnectAPIService, private route: ActivatedRoute, private router: Router){}
  collections: any;
  cltn:any;
  id: any;
  products: any[]=[];
  ngOnChanges(){}
  ngOnInit(){
    this.api.GetCollections().subscribe(res=>{
      console.log(res);
      this.collections = res;
    })
    this.route.queryParams.subscribe(params => {
      this.cltn = params['collection'];
      this.id = params['id'];
    });
    this.api.GetProducts(this.id).subscribe(res=>{
      console.log('resdfad', res)
      this.products.push(res);
    })
  }
 
  showDropdown = false;

  addToCart(pid: any, cid: any){
    this.router.navigate(['/cart'], {queryParams: {pid: pid, cid: cid}});
  }
  gotocollections(collections: any, id: any){
    this.router.navigate(['collections'], {queryParams: {collection: collections,id: id}});
  }
}

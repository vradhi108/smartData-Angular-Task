import { Component } from '@angular/core';
import { AuthServiceService } from '../../services/auth-service.service';
import { ConnectAPIService } from 'src/app/services/connect-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent {
   
    constructor(private authService: AuthServiceService, private api: ConnectAPIService, private router: Router ) {}
    collections: any;
    ngOnInit(){
      this.api.GetCollections().subscribe(res=>{
        console.log(res);
        this.collections = res;
      })
    }
    showDropdown = false;
    resetTokenHandler(){
      this.authService.logout();
    }

    gotocollections(collections: any, id: any){
      this.router.navigate(['/collections'], {queryParams: {collection: collections,id: id}});
    }

    gotocart(){
      this.router.navigate(['/cart1']);
    }
}

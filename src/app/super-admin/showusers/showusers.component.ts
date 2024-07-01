import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { interval, startWith } from 'rxjs';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-showusers',
  templateUrl: './showusers.component.html',
  styleUrls: ['./showusers.component.scss']
})
export class ShowusersComponent {

  constructor (private router: Router, private ser: AuthServiceService){}
  isActive: boolean = false;
  getusers:any;
  data = new Array<Object> ();
  ngOnInit(){

    const list = localStorage.getItem('sellers');
    this.getusers = list !== null ? JSON.parse(list) : null;
    this.startAutoRefresh();
  }

  updateData(id: any){
    var value = 1;
    this.router.navigate(['/addusers'], { queryParams: {id: id, value: 1}});
  }

  deleteData(id: any){
    this.getusers.forEach((element: { userid: any; firstname: any; lastname: any; emailid: any; phonenumber: any; sellerpassword: any;}) => {
      if (element.userid === id){
        this.getusers = this.getusers.filter((user: { userid: any; firstname: any; lastname: any; emailid: any; phonenumber: any; sellerpassword: any}) => user.userid != id);
      }
    });
    console.log(this.getusers);
    localStorage.setItem('sellers', JSON.stringify(this.getusers));
    
  }

  startAutoRefresh() {
    return interval(3000);
  }

  navigateAdduser(){
    this.router.navigate(['/addusers']);
  }

  navigateshowUsers(){
    this.router.navigate(['/showusers']);
  }

  logout(){
    this.ser.logoutAdmin();
  }
  obj: any;

  deactivateUser(id: any){
    this.isActive = !this.isActive;
    this.getusers.forEach((element: { userid: any; firstname: any; lastname: any; emailid: any; phonenumber: any; sellerpassword: any; status: any}) => {
      if (element.userid === id){
        element.status = 0;
      }
      
    });
    console.log(this.getusers);
    localStorage.setItem('sellers', JSON.stringify(this.getusers));
  }

  activateUser(id: any){
    this.isActive = !this.isActive;
    this.getusers.forEach((element: { userid: any; firstname: any; lastname: any; emailid: any; phonenumber: any; sellerpassword: any; status: any}) => {
      if (element.userid === id){
        element.status = 1;
      }
      
    });
    console.log(this.getusers);
    localStorage.setItem('sellers', JSON.stringify(this.getusers));
  }
  
}

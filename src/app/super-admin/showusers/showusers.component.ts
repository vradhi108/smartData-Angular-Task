import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { interval, startWith } from 'rxjs';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { ConnectAPIService } from 'src/app/services/connect-api.service';
@Component({
  selector: 'app-showusers',
  templateUrl: './showusers.component.html',
  styleUrls: ['./showusers.component.scss']
})
export class ShowusersComponent {

  constructor (private router: Router, private ser: AuthServiceService, private api: ConnectAPIService){}
  isActive: boolean = false;
  getusers:any;
  data :any;
  sellers = new Object;
  ngOnInit(){
    this.api.getsellers().subscribe((res) =>{
      this.data=res;
      
      console.log('in',this.data);
    })
    console.log('out',this.data);
    


    // const list = localStorage.getItem('sellers');
    // this.getusers = list !== null ? JSON.parse(list) : null;
    // this.startAutoRefresh();
  }

  updateData(id: any){
    var value = 1;
    this.router.navigate(['/addusers'], { queryParams: {id: id, value: 1}});
  }

  deleteData(id: any){
    this.api.deleteseller(id).subscribe(res =>{
      console.log(res);
      this.api.getseller(id).subscribe(res =>{
        this.data = res;
      })
    });
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

  arrayforresa: any;
  activateUser(userid: any){
    console.log('inside the function', userid);
    this.api.changesellerstatus(userid).subscribe(res=>{
      this.api.getseller(userid).subscribe(res =>{
        this.data = res;
      })
      console.log('this is the response',res);
    });

    // this.api.getsellers().subscribe(res =>{
    //   this.arrayforresa = res;
    //   this.arrayforresa.forEach((element: any) => {
    //     if (element.sellerid === id){
    //       if(element.status == 0) 
    //     }
    //   });
    // })
    
    // this.getusers.forEach((element: { userid: any; firstname: any; lastname: any; emailid: any; phonenumber: any; sellerpassword: any; status: any}) => {
    //   if (element.userid === id){
    //     element.status = 1;
        
    //   }
      
    // });
    // localStorage.setItem('sellers', JSON.stringify(this.getusers));
    // console.log(this.getusers);
  }
  

  visibility = false;
  userPasswordVisible: { [key: string]: boolean } = {};
  toggleVisibility(userid: any){
    this.getusers.forEach((element: { userid: any; firstname: any; lastname: any; emailid: any; phonenumber: any; sellerpassword: any; status: any}) => {
      if (element.userid === userid){
        this.userPasswordVisible[userid] = !this.userPasswordVisible[userid];
      }
    });
  }
}

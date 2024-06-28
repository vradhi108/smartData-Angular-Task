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

  getusers:any;
  data = new Array<Object> ();
  ngOnInit(){

    const list = localStorage.getItem('users');
    this.getusers = list !== null ? JSON.parse(list) : null;
    this.startAutoRefresh();
  }

  updateData(id: any){

  }

  deleteData(id: any){

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
}

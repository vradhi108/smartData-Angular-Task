import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent {

  constructor (private router: Router){}

  adduser = new FormGroup({
    userid: new FormControl('', Validators.required),
    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    emailid: new FormControl('', [Validators.required, Validators.email]),
    phonenumber: new FormControl('', [Validators.required,Validators.pattern('^[- +()0-9]+$'), Validators.minLength(10), Validators.maxLength(10)])
  });

  newuser: any;
  alreadyPresent: boolean = false;
  addUser(){
    let obj = {
      userid: this.adduser.value.userid,
      firstname: this.adduser.value.firstname,
      lastname: this.adduser.value.lastname,
      emailid: this.adduser.value.emailid,
      phonenumber: this.adduser.value.phonenumber
    }
    let user:any = [];
    // console.log(list);
    if (localStorage.getItem('users') == null) localStorage.setItem('users', JSON.stringify(user));
    
    const getlist = localStorage.getItem('users');
    this.newuser = getlist !== null ? JSON.parse(getlist) : null;
    this.alreadyPresent = this.newuser.some((i: { userid: string | null | undefined; }) => i.userid === obj.userid);
    if (!this.alreadyPresent){
      this.newuser.push(obj);
      localStorage.setItem('users', JSON.stringify(this.newuser));
    }
    
    // this.route.navigate(['/listuser'])

    
  }

  navigateAdduser(){
    this.router.navigate(['/addusers']);
  }

  navigateshowUsers(){
    this.router.navigate(['/showusers']);
  }


}

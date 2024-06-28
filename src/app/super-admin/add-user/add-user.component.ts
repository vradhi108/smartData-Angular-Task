import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent {

  constructor (private router: Router, private ser: AuthServiceService, private route: ActivatedRoute) {}

  id: any;
  value: number = 0;

  ngOnInit(){
    // this.id = this.route.snapshot.paramMap.get('id');
    // this.value = this.route.snapshot.paramMap.get('value');
    // console.log(this.id);

    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
      this.value = params['value'];
      console.log('ID from query params:', this.id);
      console.log('value', this.value);
    
      // Now you can use the id as needed in your component
  });
  console.log(this.id);
  console.log(this.value);

  this.edituser();
}

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
    if (localStorage.getItem('users') == null) localStorage.setItem('users', JSON.stringify(user));
    
    const getlist = localStorage.getItem('users');
    this.newuser = getlist !== null ? JSON.parse(getlist) : null;
    this.alreadyPresent = this.newuser.some((i: { userid: string | null | undefined; }) => i.userid === obj.userid) || 
    this.newuser.some((i: { emailid: string | null | undefined; }) => i.emailid === obj.emailid) ||
    this.newuser.some((i: { phonenumber: string | null | undefined; }) => i.phonenumber === obj.phonenumber);

    if (!this.alreadyPresent){
      this.newuser.push(obj);
      localStorage.setItem('users', JSON.stringify(this.newuser));
      alert('User added.')
    }
    else{
      alert('The user is already present.')
    }
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
  edituser(){
    const getlist = localStorage.getItem('users');
    this.newuser = getlist !== null ? JSON.parse(getlist) : null;
    // var present = this.newuser.some((i: { userid: string | null | undefined; }) => i.userid === this.id);
    
      
      this.newuser.forEach((element: { userid: any; firstname: any; lastname: any; emailid: any; phonenumber: any; }) => {
        if (element.userid === this.id){
          this.obj = {
            userid: element.userid,
            firstname: element.firstname,
            lastname: element.lastname,
            emailid: element.emailid,
            phonenumber: element.phonenumber
          }
        }
        
      });
      console.log(this.obj);

      this.adduser.patchValue(this.obj);
      
  }


  confirmEdit(){
    this.newuser.forEach((element: { userid: any; firstname: any; lastname: any; emailid: any; phonenumber: any; }) => {
      if (element.userid === this.id){
        element.userid = this.adduser.value.userid,
        element.firstname = this.adduser.value.firstname,
        element.lastname = this.adduser.value.lastname,
        element.emailid = this.adduser.value.emailid,
        element.phonenumber = this.adduser.value.phonenumber
      }
      
      
    });

      localStorage.setItem('users', JSON.stringify(this.newuser));
      alert('User edited.')
     
  }



}

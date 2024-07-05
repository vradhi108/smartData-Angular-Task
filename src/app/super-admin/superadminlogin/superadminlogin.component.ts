import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-superadminlogin',
  templateUrl: './superadminlogin.component.html',
  styleUrls: ['./superadminlogin.component.scss']
})
export class SuperadminloginComponent {
  constructor(private authservice: AuthServiceService, private router: Router){};
  forgotPassword = false;
  visibility = false;

  

  form = new FormGroup({
    username: new FormControl('',[Validators.required, Validators.minLength(4), Validators.maxLength(10)]),
    password: new FormControl('',[Validators.required, Validators.minLength(6) ,Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$')]),
  });


  passwordType: string = 'password';
  clickedForgotPassword(){
    this.forgotPassword = true;
  }
  // onClick(){
  //   this.authservice.login(this.form.value.username, this.form.value.password);
  // }

  toggleVisibility(){
    this.visibility = !this.visibility;
    if (this.visibility){
      this.passwordType = 'text';
    }
    else this.passwordType = 'password';
  }
  adminVerified(){
    this.authservice.adminLogin(this.form.value.username, this.form.value.password);
  }
 
}

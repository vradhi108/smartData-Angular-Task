import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from '../services/auth-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private authservice: AuthServiceService){};
  forgotPassword = false;
  visibility = false;

  

  form = new FormGroup({
    username: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required, Validators.minLength(6) ,Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$')]),
  });


  passwordType: string = 'password';
  clickedForgotPassword(){
    this.forgotPassword = true;
  }
  onClick(){
    this.authservice.login(this.form.value.username, this.form.value.password);

  }

  toggleVisibility(){
    this.visibility = !this.visibility;
    if (this.visibility){
      this.passwordType = 'text';
    }
    else this.passwordType = 'password';
  }

 


  
}

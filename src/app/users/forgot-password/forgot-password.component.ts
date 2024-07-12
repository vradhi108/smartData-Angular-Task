import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {
  constructor(private router: Router) { }


  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    otp: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required,  Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]),
    confirmPassword: new FormControl('', [Validators.required,  Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')])
  });


  ngOnInit(): void {


  }


  emailFilled = false;
  otpVerified = false;
  passwordFilled = false;
  matchPassword = false;
  pw: any;
  cpw: any;
  inputOTP: any;


  sendOTP(){
    this.emailFilled = true;
  }


  checkOTP(){
    console.log(this.form.value.otp)
    if (this.form.value.otp == "0000"){
      this.otpVerified = true;
    }
    else alert('You entered wrong otp');
  }


  MatchPassword(pass: string, cpass: string){
    this.passwordFilled = true;
    if (pass == cpass){
      this.matchPassword = true;
    }
    else this.matchPassword = false;
  }
 
  changePassword(){
    alert('Password changed successfully. You may proceed to login page');
    this.router.navigate(['/login']);
  }

}

import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from '../../services/auth-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-seller-login',
  templateUrl: './seller-login.component.html',
  styleUrls: ['./seller-login.component.scss']
})
export class SellerLoginComponent {
  constructor(private authservice: AuthServiceService, private router: Router, private route: ActivatedRoute) { };
  forgotPassword = false;
  visibility = false;
  id: any;
  getusers: any;
  ngOnInit() {
    const list = localStorage.getItem('sellers');
    this.getusers = list !== null ? JSON.parse(list) : null;


  }


  form = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$')]),
  });


  passwordType: string = 'password';
  clickedForgotPassword() {
    this.forgotPassword = true;
  }
  rightCredentials = false;
  onClick() {
    this.getusers.forEach((element: { userid: any; firstname: any; lastname: any; emailid: any; phonenumber: any; sellerpassword: any; status: any; }) => {
      if (element.userid === this.form.value.username && element.sellerpassword === this.form.value.password) {
        this.rightCredentials = true;
        if (element.status === 1) {
          this.router.navigate(['/sellerprofile'], { queryParams: { id: this.form.value.username } });
          var token = 'sellerloginadsfjaldasfdf';
          localStorage.setItem('sellertoken', token);
        }
        else {
          alert('Not an active seller.')
        }

      }
    });

    if (!this.rightCredentials) alert('Wrong credentials')
  }

  toggleVisibility() {
    this.visibility = !this.visibility;
    if (this.visibility) {
      this.passwordType = 'text';
    }
    else this.passwordType = 'password';
  }

}

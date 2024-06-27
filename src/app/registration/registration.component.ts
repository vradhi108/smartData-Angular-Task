import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RandomUseridGenerationService } from '../services/random-userid-generation.service';


interface Country{
  name: string;
  states: string[];
}

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {

  constructor(private router: Router, private RandomUserId: RandomUseridGenerationService){};

  invalid = false;
  showPasswordRules: any;
  touch = false;
  userId: any;
  country: any;
  selectedCountry = '';
  selectedState = '';
  isPasswordFilled = false;
  isPasswordCorrect = false;
  countries: Country[] = [
    {name: 'India', 
      states: ['Andhra Pradesh', 'Arunachal Pradesh', 
      'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 
      'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 
      'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 
      'Tripura', 'Uttarakhand', 'Uttar Pradesh', 'West Bengal']
    },
    {
      name: 'US',
      states: ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 
        'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 
        'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 
        'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey',
         'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 
         'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 
         'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming']
    }
  ]




  form = new FormGroup({
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phonenumber: new FormControl('', [Validators.required,Validators.pattern('^[- +()0-9]+$'), Validators.minLength(10), Validators.maxLength(10)]),
    age: new FormControl('', [Validators.required, Validators.min(1)]),
    gender: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    country: new FormControl('', Validators.required),
    state: new FormControl('', Validators.required),
    password: new FormControl('',[Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$')]),
    confirmPassword: new FormControl('', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$')])
  });


  

  generateUserId() {
    this.userId = this.RandomUserId.generateUserId();
  }

  filteredStates: string[] = [];

  onCountryChange() {
    const selectedCountry = this.countries.find(c => c.name === this.selectedCountry);
    this.filteredStates = selectedCountry ? selectedCountry.states : [];
    this.selectedState = '';
  }

  onClick(){
    if(this.form.valid && this.form.value.password === this.form.value.confirmPassword){
      this.generateUserId();
      console.log(this.form.value);
      console.log(this.userId);
      alert('Your User Id is: '+ this.userId + '. Please note it down for further process.')
      this.router.navigate(['login']);
    }
    else if (this.form.value.password != this.form.value.confirmPassword){
      alert('Password does not match');
    }
    else{
      this.invalid = true;
      console.log("Invalid form");
    }
  }

  checkPassword(p: string, cp: string){
    this.isPasswordFilled = true;
    if (p === cp)  {
      this.isPasswordCorrect = true;
  }
}
}

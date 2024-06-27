import { Component } from '@angular/core';
import { AuthServiceService } from '../services/auth-service.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent {
   
    constructor(private authService: AuthServiceService ) {

      
    }
    resetTokenHandler(){
      this.authService.logout();
    }
}

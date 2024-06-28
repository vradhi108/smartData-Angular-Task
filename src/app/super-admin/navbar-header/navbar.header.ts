import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';
@Component({
    selector: 'navbar-header',
    templateUrl: './navbar.header.html',
    styleUrls: ['./navbar.header.scss']
})
export class NavbarHeaderComponent{
    constructor(private router: Router, private ser: AuthServiceService){}
    navigateRegisteruser(){
        this.router.navigate(['/registration']);
    }

    navigatLoginuser(){
        this.router.navigate(['/login']);
    }

    navigateAdminlogin(){
        this.router.navigate(['/adminlogin']);
    }

    logout(){
        this.ser.logoutAdmin();
    }
}
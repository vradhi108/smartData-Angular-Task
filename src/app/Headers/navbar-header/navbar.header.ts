import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
    selector: 'navbar-header',
    templateUrl: './navbar.header.html',
    styleUrls: ['./navbar.header.scss']
})
export class NavbarHeaderComponent{
    constructor(private router: Router){}
    navigateRegisteruser(){
        this.router.navigate(['/registration']);
    }

    navigatLoginuser(){
        this.router.navigate(['/login']);
    }

    navigateAdminlogin(){
        this.router.navigate(['/adminlogin']);
    }

    
}
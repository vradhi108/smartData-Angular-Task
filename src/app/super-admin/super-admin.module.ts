import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddUserComponent } from './add-user/add-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ShowusersComponent } from './showusers/showusers.component';
import { SuperadminloginComponent } from './superadminlogin/superadminlogin.component';
import { NavbarHeaderComponent } from './navbar-header/navbar.header';

@NgModule({
  declarations: [
    AddUserComponent,
    ShowusersComponent,
    SuperadminloginComponent,
    NavbarHeaderComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  bootstrap: [SuperadminloginComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SuperAdminModule { }

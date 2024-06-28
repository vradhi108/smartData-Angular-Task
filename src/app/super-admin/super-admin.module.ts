import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddUserComponent } from './add-user/add-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ShowusersComponent } from './showusers/showusers.component';



@NgModule({
  declarations: [
    AddUserComponent,
    ShowusersComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class SuperAdminModule { }

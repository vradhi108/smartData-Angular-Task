import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SellerprofileComponent } from './sellerprofile/sellerprofile.component';
import { HeaderComponent } from './seller-nav-header/header/header.component';


@NgModule({
  declarations: [
    SellerprofileComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class SellerModule { }

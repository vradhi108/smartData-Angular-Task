import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SellerprofileComponent } from './sellerprofile/sellerprofile.component';
import { HeaderComponent } from './seller-nav-header/header/header.component';
import { AddcollectionComponent } from './addcollection/addcollection.component';


@NgModule({
  declarations: [
    SellerprofileComponent,
    HeaderComponent,
    AddcollectionComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class SellerModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SellerprofileComponent } from './sellerprofile/sellerprofile.component';
import { HeaderComponent } from './seller-nav-header/header/header.component';
import { AddcollectionComponent } from './addcollection/addcollection.component';
import { AddItemComponent } from './add-item/add-item.component';
import { AdditemdetailsComponent } from './additemdetails/additemdetails.component';
import { HttpClientModule } from '@angular/common/http';
import { ShowproductsComponent } from './showproducts/showproducts.component';
@NgModule({
  declarations: [
    SellerprofileComponent,
    HeaderComponent,
    AddcollectionComponent,
    AddItemComponent,
    AdditemdetailsComponent,
    ShowproductsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class SellerModule { }

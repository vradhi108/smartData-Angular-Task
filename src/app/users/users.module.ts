import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectionsComponent } from './collections/collections.component';
import { CartComponent } from './cart/cart.component';



@NgModule({
  declarations: [
    CollectionsComponent,
    CartComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UsersModule { }

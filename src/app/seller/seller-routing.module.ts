import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SellerLoginComponent } from './seller-login/seller-login.component';
import { SellerprofileComponent } from './sellerprofile/sellerprofile.component';
import { AddcollectionComponent } from './addcollection/addcollection.component';
import {AddItemComponent} from './add-item/add-item.component'
import { AdditemdetailsComponent } from './additemdetails/additemdetails.component';
import { ShowproductsComponent } from './showproducts/showproducts.component';
const routes: Routes = [
  {path: '', component: SellerprofileComponent},
  {path: 'sellerlogin', component: SellerLoginComponent},
  {path: 'sellerprofile', component: SellerprofileComponent},
  {path: 'addcollection', component: AddcollectionComponent},
  {path: 'additem', component: AddItemComponent},
  {path: 'additemdetails', component: AdditemdetailsComponent},
  {path: 'showproducts', component: ShowproductsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellerRoutingModule { }

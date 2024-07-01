import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SellerLoginComponent } from './seller-login/seller-login.component';
import { SellerprofileComponent } from './sellerprofile/sellerprofile.component';

const routes: Routes = [
  {path: '', component: SellerLoginComponent},
  {path: 'sellerlogin', component: SellerLoginComponent},
  {path: 'sellerprofile', component: SellerprofileComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellerRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserPageComponent } from './user-page/user-page.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { CollectionsComponent } from './collections/collections.component';
import { CartComponent } from './cart/cart.component';
const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'userpage', component: UserPageComponent},
  {path: 'forgotPassword', component: ForgotPasswordComponent},
  {path: 'collections', component: CollectionsComponent},
  {path: 'cart', component: CartComponent},
  {path: 'cart1', component: CartComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }

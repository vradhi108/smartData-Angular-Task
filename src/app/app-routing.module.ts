import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserPageComponent } from './user-page/user-page.component';
import { authLoginGuard } from './auth-login.guard';
import { RegistrationComponent } from './registration/registration.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import {SuperAdminRoutingModule} from './super-admin/super-admin-routing.module';
import { SellerLoginComponent } from './seller/seller-login/seller-login.component';
const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'userpage', component: UserPageComponent, canActivate: [authLoginGuard]},
  {path: 'registration', component: RegistrationComponent},
  {path: 'forgotPassword', component: ForgotPasswordComponent},
  { path: 'superAdmin', loadChildren: () => import('./super-admin/super-admin-routing.module').then(m => m.SuperAdminRoutingModule) },
  { path: 'seller', loadChildren: () => import('./seller/seller-routing.module').then(m => m.SellerRoutingModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './users/login/login.component';
import { UserPageComponent } from './users/user-page/user-page.component';
import { authLoginGuard } from './auth-login.guard';
import { RegistrationComponent } from './users/registration/registration.component';
import { ForgotPasswordComponent } from './users/forgot-password/forgot-password.component';
import {SuperAdminRoutingModule} from './super-admin/super-admin-routing.module';
import { SellerLoginComponent } from './seller/seller-login/seller-login.component';
const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'userpage', component: UserPageComponent, canActivate: [authLoginGuard]},
  {path: 'registration', component: RegistrationComponent},
  {path: 'forgotPassword', component: ForgotPasswordComponent},
  { path: 'superAdmin', loadChildren: () => import('./super-admin/super-admin-routing.module').then(m => m.SuperAdminRoutingModule) },
  { path: 'seller', loadChildren: () => import('./seller/seller-routing.module').then(m => m.SellerRoutingModule) },
  { path: 'users', loadChildren: () => import('./users/users-routing.module').then(m => m.UsersRoutingModule) },
  { path: '', loadChildren: () => import('./users/users-routing.module').then(m => m.UsersRoutingModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

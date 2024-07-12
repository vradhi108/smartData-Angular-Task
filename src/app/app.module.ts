import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './users/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserPageComponent } from './users/user-page/user-page.component';
import { RegistrationComponent } from './users/registration/registration.component';
import { BlockCopyPasteDirective } from './Directives/copy-paste-block.directive';
import { ForgotPasswordComponent } from './users/forgot-password/forgot-password.component';
import { SuperAdminRoutingModule } from './super-admin/super-admin-routing.module';
import { SuperAdminModule } from './super-admin/super-admin.module';
import {NavbarHeaderComponent} from './Headers/navbar-header/navbar.header';
import { SellerLoginComponent } from './seller/seller-login/seller-login.component';
import { SellerRoutingModule } from './seller/seller-routing.module';
import { SellerModule } from './seller/seller.module';
import { HttpClientModule } from '@angular/common/http';
import { UsersRoutingModule } from './users/users-routing.module';
import { UsersModule } from './users/users.module';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserPageComponent,
    RegistrationComponent,
    BlockCopyPasteDirective,
    ForgotPasswordComponent,
    NavbarHeaderComponent,
    SellerLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SuperAdminRoutingModule,
    SuperAdminModule,
    SellerRoutingModule,
    SellerModule,
    HttpClientModule,
    UsersRoutingModule,
    UsersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

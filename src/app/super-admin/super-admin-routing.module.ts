import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { ShowusersComponent } from './showusers/showusers.component';
import { SuperadminloginComponent } from './superadminlogin/superadminlogin.component';
import { adminAuthGuard } from './admin-guard/admin-auth.guard';

const routes: Routes = [
  {path: '', component: AddUserComponent},
  {path: 'addusers', component: AddUserComponent, canActivate: [adminAuthGuard]},
  {path: 'showusers', component: ShowusersComponent, canActivate: [adminAuthGuard]},
  {path: 'adminlogin', component: SuperadminloginComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperAdminRoutingModule { }

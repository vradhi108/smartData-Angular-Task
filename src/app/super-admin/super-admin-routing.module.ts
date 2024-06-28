import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { ShowusersComponent } from './showusers/showusers.component';

const routes: Routes = [
  {path: '', component: AddUserComponent},
  {path: 'addusers', component: AddUserComponent},
  {path: 'showusers', component: ShowusersComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperAdminRoutingModule { }

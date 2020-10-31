import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminUserListComponent } from './components/admin-user-list/admin-user-list.component';
import { BasicUserListComponent } from './components/basic-user-list/basic-user-list.component';
import { BusinessUserListComponent } from './components/business-user-list/business-user-list.component';
import { UserManagementComponent } from './components/user-management.component';


const routes: Routes = [
    { 
      path:"" , 
      component : UserManagementComponent, 
      children: [
        { path: 'basic', component : BasicUserListComponent },
        { path: 'business', component : BusinessUserListComponent },
        { path: 'admin', component : AdminUserListComponent }
      ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserManagementRoutingModule { }

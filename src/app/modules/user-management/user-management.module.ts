import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserManagementRoutingModule } from './user-management-routing.module';
import { BasicUserListComponent } from './components/basic-user-list/basic-user-list.component';
import { BusinessUserListComponent } from './components/business-user-list/business-user-list.component';
import { AdminUserListComponent } from './components/admin-user-list/admin-user-list.component';
import { UserManagementComponent } from './components/user-management.component';


@NgModule({
  declarations: [ UserManagementComponent, BasicUserListComponent, BusinessUserListComponent, AdminUserListComponent],
  imports: [
    CommonModule,
    UserManagementRoutingModule
  ]
})
export class UserManagementModule { }

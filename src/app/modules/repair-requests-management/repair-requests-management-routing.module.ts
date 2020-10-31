import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListRepairRequestsComponent } from './list-repair-requests/list-repair-requests.component';
import { RepairRequestsManagementComponent } from './repair-requests-management.component';


const routes: Routes = [
  {
    path: "",
    component: RepairRequestsManagementComponent,
    children: [
      { path: 'list', component: ListRepairRequestsComponent },
    ]
  }
  // { path: '', component: ListRepairRequestsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RepairRequestsManagementRoutingModule { }

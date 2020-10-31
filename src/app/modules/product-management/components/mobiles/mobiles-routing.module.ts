import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MobileAddComponent } from './mobile-add/mobile-add.component';
import { MobileEditComponent } from './mobile-edit/mobile-edit.component';
import { MobileListComponent } from './mobile-list/mobile-list.component';


const routes: Routes = [
  { path:'list', component : MobileListComponent },
  { path:'add', component : MobileAddComponent },
  { path:'edit:id', component : MobileEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MobilesRoutingModule { }

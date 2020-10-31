import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobilesRoutingModule } from './mobiles-routing.module';
import { MobileListComponent } from './mobile-list/mobile-list.component';
import { MobileAddComponent } from './mobile-add/mobile-add.component';
import { MobileEditComponent } from './mobile-edit/mobile-edit.component';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';



@NgModule({
  declarations: [MobileListComponent, MobileAddComponent, MobileEditComponent],
  imports: [
    CommonModule,
    MobilesRoutingModule,
    TableModule,
    DropdownModule,
    MultiSelectModule,
  ]
})
export class MobilesModule { }

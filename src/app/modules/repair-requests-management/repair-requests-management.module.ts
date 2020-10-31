import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RepairRequestsManagementRoutingModule } from './repair-requests-management-routing.module';
import { ListRepairRequestsComponent } from './list-repair-requests/list-repair-requests.component';

import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { CalendarModule } from 'primeng/calendar';
import { SliderModule } from 'primeng/slider';
import { MultiSelectModule } from 'primeng/multiselect';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { ProgressBarModule } from 'primeng/progressbar';
import { InputTextModule } from 'primeng/inputtext';
import { FileUploadModule } from 'primeng/fileupload';
import { ToolbarModule } from 'primeng/toolbar';
import { RatingModule } from 'primeng/rating';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { SplitButtonModule } from 'primeng/splitbutton';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { PaginatorModule } from 'primeng/paginator';
import { InputNumberModule } from 'primeng/inputnumber';


import { RepairRequestsManagementComponent } from './repair-requests-management.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EditRepairRequestComponent } from './edit-repair-request/edit-repair-request.component';



@NgModule({
  declarations: [ListRepairRequestsComponent, RepairRequestsManagementComponent, EditRepairRequestComponent],
  imports: [
    CommonModule,
    RepairRequestsManagementRoutingModule,
    TableModule,
    CalendarModule,
    SliderModule,
    DialogModule,
    MultiSelectModule,
    ContextMenuModule,
    DropdownModule,
    ButtonModule,
    ToastModule,
    InputTextModule,
    ProgressBarModule,
    HttpClientModule,
    FileUploadModule,
    ToolbarModule,
    RatingModule,
    FormsModule,
    RadioButtonModule,
    ConfirmDialogModule,
    SplitButtonModule,
    DynamicDialogModule,
    PaginatorModule,
    InputNumberModule
  ],
  entryComponents: [
    EditRepairRequestComponent
  ]
})
export class RepairRequestsManagementModule { }

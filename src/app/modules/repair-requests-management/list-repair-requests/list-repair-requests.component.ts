import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { EditRepairRequestComponent } from '../edit-repair-request/edit-repair-request.component';
import { RepairRequestsService } from '../services/repair-requests.service';
import { RepairRequestData } from '../models/repair-request';

@Component({
  selector: 'app-list-repair-requests',
  templateUrl: './list-repair-requests.component.html',
  styleUrls: ['./list-repair-requests.component.css'],
  styles: [`
        :host ::ng-deep .p-dialog .product-image {
            width: 150px;
            margin: 0 auto 2rem auto;
            display: block;
        }
    `],
  providers: [MessageService, ConfirmationService, DialogService]
})
export class ListRepairRequestsComponent implements OnInit {

  productDialog: boolean;

  selecteditems: RepairRequestData[];

  submitted: boolean;

  constructor(
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    public dialogService: DialogService,
    private RepairRequestsService: RepairRequestsService
  ) { }

  ngOnInit() {
    this.getListRequest();

  }

  pageNo: number = 1;
  ListRequestCount: number;
  repairRequestList: RepairRequestData[] = []

  getListRequest() {
    this.RepairRequestsService.getlistRepairRequest({ pageNumber: this.pageNo }).subscribe(data => {
      this.repairRequestList = data.data;
      this.ListRequestCount = data.count;
    })
  }

  loadMoreListRequestData(event: any) {
    this.pageNo = event.page + 1;
    this.getListRequest();
  }

  deleteSelectedItems() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected Item?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.repairRequestList = this.repairRequestList.filter(val => !this.selecteditems.includes(val));
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Items Deleted', life: 3000 });
        this.selecteditems.forEach(item => {
          this.RepairRequestsService.deleteRepairRequest({ itemId: item.id }).subscribe();
        });
        this.ListRequestCount -= this.selecteditems.length;
        this.selecteditems = [];
      }
    });
  }

  editProduct(item: RepairRequestData) {
   
    console.log(item, 'item');

    const ref = this.dialogService.open(EditRepairRequestComponent, {
      data: {
        item
      },
      header: 'Item Details',
      width: '50%',
      contentStyle: { "max-height": "500px", "overflow": "auto" },
      autoZIndex: true
    });

  }


  deleteItem(item: RepairRequestData) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete request Number' + item.requestNumber + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.repairRequestList = this.repairRequestList.filter(val => val.id !== item.id);
        this.RepairRequestsService.deleteRepairRequest({ itemId: item.id }).subscribe(data => {
          if (data.succeeded) {
            this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'item Deleted', life: 3000 });
          }
        })
      }
    });
  }




}

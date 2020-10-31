import { Component, OnInit } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { RepairRequestData } from '../models/repair-request';

@Component({
  selector: 'app-edit-repair-request',
  templateUrl: './edit-repair-request.component.html',
  styleUrls: ['./edit-repair-request.component.css'],
  // styles: [`
  //       :host ::ng-deep .p-dialog .product-image {
  //           width: 150px;
  //           margin: 0 auto 2rem auto;
  //           display: block;
  //       }
  //   `],
})
export class EditRepairRequestComponent implements OnInit {
  item: RepairRequestData;
  submitted: boolean;

  product = {
    "id": "1000",
    "code": "f230fh0g3",
    "name": "Bamboo Watch",
    "description": "Product Description",
    "image": "bamboo-watch.jpg",
    "price": 65,
    "category": "Accessories",
    "quantity": 24,
    "inventoryStatus": "INSTOCK",
    "rating": 5
  }
  constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig) { }

  ngOnInit(): void {
    // this.item = this.config.data.item
  }


  hideDialog() {
    console.log('hide')
  }

  saveProduct() {
    console.log('save')
  }


}

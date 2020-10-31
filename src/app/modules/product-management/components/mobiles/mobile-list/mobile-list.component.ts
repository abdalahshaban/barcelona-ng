import { Component, OnInit } from '@angular/core';
import { NgDropDownOption } from '../models/ng-dropdown-option.model';
import { Product } from '../models/product.model';
import { TableColumn } from '../models/table.columns.model';
import { MobileApiService } from '../services/mobile-api.service';

@Component({
  selector: 'app-mobile-list',
  templateUrl: './mobile-list.component.html',
  styleUrls: ['./mobile-list.component.css']
})
export class MobileListComponent implements OnInit {
  cols :TableColumn[]  = []
  ramOptions : NgDropDownOption[] = []
  colorOptions : NgDropDownOption[] = []
  deviceBrandOptions : NgDropDownOption[] = []
  connectivityOptions : NgDropDownOption[] = []
  storageOptions : NgDropDownOption[] = []
  mobiles : Product[] = []
  selectedMobile:Product
  constructor(private mobileApiSrvc:MobileApiService) { }

  ngOnInit(): void {
    this.getAllMobileData()
    this.getTableColumns()
    this.getRam()
    this.getConnectivity()
    this.getDeviceBrand()
    this.getStorage()
    this.getColorOptions()
  }

  getAllMobileData(){
    this.mobileApiSrvc.getAllMobilePhones()
    .subscribe(
      (res:any)=>{
        this.mobiles = res.data
      }
    )
  }

  getTableColumns(){
    let columns : string[] = ['id',"name","description","versionPrice","deviceBrand",'ram','connectivity','storage','color']
    columns.forEach(column=>this.cols.push(new TableColumn(column,column)))
  }
  
  getRam(){
    let rams : number[] = [3,4,6,8,12]
    rams.forEach(ram=>this.ramOptions.push(new NgDropDownOption(String(ram),ram)))
  }
  
  getConnectivity(){
    let connectivities : string[] = ['2G','3G',"4G","5G"]
    connectivities.forEach(connectivity=>this.connectivityOptions.push(new NgDropDownOption(connectivity,connectivity)))
  }

  
  getDeviceBrand(){
    let deviceBrands : string[] = ['Apple',"Samsung","Huwawei","Oppo","LG","Motorolla"]
    deviceBrands.forEach(deviceBrand=>this.deviceBrandOptions.push(new NgDropDownOption(deviceBrand,deviceBrand)))
  }


  getStorage(){
    let storages : number[] = [64,128,256,512]
    storages.forEach(storage=>this.storageOptions.push(new NgDropDownOption(String(storage),storage)))
  }

  
  getColorOptions(){
    let colors = ['Blue',"Red","Black","White","Grey"]
    colors.forEach(color=>this.colorOptions.push(new NgDropDownOption(color,color)))
  }

}

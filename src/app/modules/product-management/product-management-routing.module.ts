import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path:'mobiles', loadChildren : ()=> import('./components/mobiles/mobiles.module').then(m=>m.MobilesModule)  },
  { path:'accessories', loadChildren : ()=> import('./components/accessories/accessories.module').then(m=>m.AccessoriesModule)  },
  { path:'hardware-parts', loadChildren : ()=> import('./components/hardware-parts/hardware-parts.module').then(m=>m.HardwarePartsModule)  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductManagementRoutingModule { }

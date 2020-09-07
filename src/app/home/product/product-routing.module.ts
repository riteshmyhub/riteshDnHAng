import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product.component';
import { AllproductComponent } from './allproduct/allproduct.component';
import { MainproductComponent } from './mainproduct/mainproduct.component';


const routes: Routes = [
  {path:'',children:[
    {path:'',component:ProductComponent},
    {path:'Allproduct',children:[
      {path:'',component:AllproductComponent},
      {path:'Mainproduct',component:MainproductComponent},
    ]},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }

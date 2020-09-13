import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { MainproductComponent } from './mainproduct/mainproduct.component';
import { AllproductComponent } from './allproduct/allproduct.component';
import { GlobleProductCategoryService } from './service/globle-product-category.service';


@NgModule({
  declarations: [MainproductComponent,AllproductComponent],
  imports: [
    CommonModule,
    ProductRoutingModule
  ],
  providers:[GlobleProductCategoryService]
})
export class ProductModule { }

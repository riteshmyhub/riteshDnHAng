import { Component, OnInit } from '@angular/core';
import { ProductCategoryService } from '../service/product-category.service';
import { AddCategoryComponent } from './add-category/add-category.component';
import { AddProductsComponent } from './add-products/add-products.component';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {
  productCategories = []
  loadHere;
  constructor(private service: ProductCategoryService) { }
  DyLoad(Componentholder) {
    if (Componentholder === 'AddCategory') {
      this.loadHere = AddCategoryComponent;
    } else if (Componentholder === 'AddProducts') {
      this.loadHere = AddProductsComponent;
    }
    else {
      return null
    }
  }
  closedModel(param) {
    this.loadHere = param;
  }
  ngOnInit(): void {
    this.C_get_ProductCategory()
  }
  C_get_ProductCategory() {
    this.service.S_get_ProductCategory().subscribe(res => this.productCategories = res)
  }
}

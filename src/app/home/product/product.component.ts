import { Component, OnInit } from '@angular/core';
import { GlobleProductCategoryService } from './service/globle-product-category.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  ProductCategory = []
  constructor(private service: GlobleProductCategoryService) { }

  ngOnInit(): void {
    this.C_Get_Product_Category()
  }
  C_Get_Product_Category() {
    this.service.S_Get_Product_Category().subscribe(res => this.ProductCategory = res)
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductType } from 'src/app/home/models/product.model';
import { ProductsService } from '../../service/products.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {
  active: boolean = false;
  popup = {
    toggle: {
      text: '',
      btn: '',
      message: '',
    }
  }
  productForm
  ProductCategory = [];
  Product = [];
  SelectedCategory = Number;
  CategoryID = null;
  constructor(private FB: FormBuilder, private service: ProductsService) { }

  ngOnInit(): void {
    this.productForm = this.FB.group({
      Category: ["", [Validators.required]],
      Name: ["", [Validators.required]],
      Brand: ["", [Validators.required]],
      img: ["", [Validators.required]],
      aws: ["", [Validators.required]],
      models: ["", [Validators.required]],
      price: ["", [Validators.required]],
      description: ["", [Validators.required]],
    })
    this.C_Get_Product_category_api()
  }
  update_Product(prama: number) {
    this.modelToggle(true, 'Update Product', 'success')
    this.service.S_Get_Product_id(prama).subscribe(data => {
      this.CategoryID = prama
      this.productForm.controls["Category"].setValue(data.Category)
      this.productForm.controls["Name"].setValue(data.Name)
      this.productForm.controls["Brand"].setValue(data.Brand)
      this.productForm.controls["img"].setValue(data.img)
      this.productForm.controls["aws"].setValue(data.aws)
      this.productForm.controls["models"].setValue(data.models)
      this.productForm.controls["price"].setValue(data.price)
      this.productForm.controls["description"].setValue(data.description)
    })
  }
  submit() {
    this.modelToggle(false, 'Add Product', 'danger')
    let output = this.productForm.value;
    console.log(output);
    this.C_Post_product(output)
    this.productForm.reset()
    document.location.reload()
  }

  onCategorySelected(CatSelected: any) {
    this.service.S_get_selected_Product(CatSelected).subscribe(res => this.Product = res)
  }

  C_Get_Product_category_api() {
    this.service.S_Get_Product_category_api().subscribe(res => this.ProductCategory = res)
  }

  C_Post_product(abc: ProductType) {
    if (this.CategoryID == null) {
      this.service.S_post_Product(abc).subscribe(data => {
        this.C_Get_Product_category_api()
      })
    } else {
      abc.id = this.CategoryID
      this.service.s_update_Product(abc).subscribe(data => {
        this.C_Get_Product_category_api()
        this.CategoryID = null;
      })
    }
  }

  C_delete_Product(itemID) {
    this.service.s_delete_Product(itemID).subscribe(data => {
      this.C_Get_Product_category_api()
      document.location.reload()
    })
  }
  // mode popup
  modelToggle(props: boolean, message: string, color: string) {
    this.active = props;
    this.popup.toggle.message = message;
    this.popup.toggle.btn = `btn btn-${color} btn-lg my-2`;
    this.popup.toggle.text = `text-${color} headind-2`;
  }
}

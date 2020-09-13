import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoryType } from 'src/app/home/models/ProductCategory.model';
import { ProductCategoryService } from '../../service/product-category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  // model
  active: boolean = false;
  popup = {
    toggle: {
      text: '',
      btn: '',
      message: '',
    }
  }
  productCategoriesForm: FormGroup;
  productCategories = [];
  CategoriesId = null;
  constructor(private service: ProductCategoryService, private FB: FormBuilder) { }

  ngOnInit(): void {
    this.productCategoriesForm = this.FB.group({
      CategoryName: ['', [Validators.required]],
      CategoryImg: ['', [Validators.required]],
    })
    this.C_get_ProductCategory()
  }
  submit() {
    let output = this.productCategoriesForm.value
    console.log(output);
    this.C_Post_ProductCategory(output)
    this.productCategoriesForm.reset()
    // model action
    this.modelToggle(false, 'Add Category', 'danger')
  }

  modelToggle(props: boolean, message: string, color: string) {
    this.active = props;
    this.popup.toggle.message = message;
    this.popup.toggle.btn = `btn btn-${color} FromSubmitBtn`;
    this.popup.toggle.text = `text-${color}`;
  }

  C_Update_ProductCategory(param: number) {
    this.service.target_ProductCategory_Id(param).subscribe(res => {
      this.CategoriesId = param
      this.productCategoriesForm.controls["CategoryName"].setValue(res.CategoryName)
      this.productCategoriesForm.controls["CategoryImg"].setValue(res.CategoryImg)
    })
    // model action
    this.modelToggle(true, 'Update Category', 'success')
  }
  C_get_ProductCategory() {
    this.service.S_get_ProductCategory().subscribe(res => this.productCategories = res)
  }

  C_Post_ProductCategory(abc: CategoryType) {
    if (this.CategoriesId == null) {
      this.service.S_Post_ProductCategory(abc).subscribe(res => {
        this.C_get_ProductCategory()
      })
    } else {
      abc.id = this.CategoriesId
      this.service.S_Update_ProductCategory(abc).subscribe(res => {
        this.C_get_ProductCategory()
        this.CategoriesId = null
      })
    }
  }
  C_Delete_ProductCategory(abc) {
    this.service.S_Delete_ProductCategory(abc).subscribe(res=>{
      this.C_get_ProductCategory()
    })
  }

}

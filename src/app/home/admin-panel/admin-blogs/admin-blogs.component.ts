import { Component, OnInit } from '@angular/core';
import { CreateBlogsService } from '../service/create-blogs.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { blogs } from '../../models/blogs.model';
import { Observable } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-admin-blogs',
  templateUrl: './admin-blogs.component.html',
  styleUrls: ['./admin-blogs.component.css']
})
export class AdminBlogsComponent implements OnInit {
  BlogFrom: FormGroup;
  Blogs = [];
  updateId = null;
  // model
  formPopup: boolean = true;
  // blogFormHeading
  UI = {
    heading: null,
    formPopup: true,
    successfully: {
      update: false,
    },
    deleteBlog: false,
    message: '',
  }

  constructor(private service: CreateBlogsService, private FB: FormBuilder) { }
  ngOnInit(): void {
    this.BlogFrom = this.FB.group({
      title: ["", [Validators.required]],
      blogger: ["", [Validators.required]],
      date: ["", [Validators.required]],
      Imgurl: ["", [Validators.required]],
      description: ["", [Validators.required]],
    })
    this.C_get_blogs()
  }
  editBlog(param: number) {
    this.UI.formPopup = false;
    this.service.target_blog_id(param).subscribe(xyz => {
      this.updateId = param;
      this.BlogFrom.controls["title"].setValue(xyz.title)
      this.BlogFrom.controls["blogger"].setValue(xyz.blogger)
      this.BlogFrom.controls["date"].setValue(xyz.date)
      this.BlogFrom.controls["Imgurl"].setValue(xyz.Imgurl)
      this.BlogFrom.controls["description"].setValue(xyz.description)
    })
    this.UI.heading = "Update Blog";

  }
  submit() {
    let output = this.BlogFrom.value;
    this.C_post_Blogs(output)
    this.BlogFrom.reset()
    this.UI.formPopup = true;
    this.UI.successfully.update = true;
  }
  // blog post method
  C_post_Blogs(xyz: blogs) {
    if (this.updateId == null) {
      this.service.s_post_blogs(xyz).subscribe(res => {
        this.C_get_blogs()
      })
    } else {
      xyz.id = this.updateId;
      this.service.s_update_blogs(xyz).subscribe(abc => {
        this.C_get_blogs()
        this.updateId = null;
      })
    }
  }

  // blog delete method
  C_delete_Blogs(blogId) {
    this.service.s_delete_blogs(blogId).subscribe(xyz => {
      this.C_get_blogs()
    })
    this.UI.deleteBlog = true;
  }
  // blog get method

  C_get_blogs() {
    this.service.s_get_blogs().subscribe(res => this.Blogs = res)
  }
  // ____________________model________________

  modelOpen(props) {
    this.UI.formPopup = false;
    this.UI.heading = "Create New Blog";
    this.UI.message = props;
  }
  modelClose() {
    this.UI.formPopup = true;
  }
  modelUpdate(update) {
    this.UI.successfully.update = false;
    this.UI.message = update;
    this.UI.deleteBlog = false;
  }
  ngAfterContentChecked(): void {
    this.noBlog()
  }

  public noBlogHere: boolean;
  noBlog() {
    if (this.Blogs.length == 0) {
      this.noBlogHere = true;
    } else {
      this.noBlogHere = false;
    }
  }
}

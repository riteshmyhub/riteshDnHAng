import { Component, OnInit } from '@angular/core';
import { GetBlogsService } from './service/get-blogs.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  Blogs = [];
  constructor(public servive: GetBlogsService, private route: Router) { }

  ngOnInit(): void {
    this.C_Get_Blogs()
  }
  C_Get_Blogs() {
    this.servive.s_get_blogs().subscribe(data => this.Blogs = data)
  }
  C_Get_By_id_blog(Blog) {
    this.route.navigate(['./Blog',Blog.id])
  }
}

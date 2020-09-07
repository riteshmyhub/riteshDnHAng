import { Component, OnInit } from '@angular/core';
import { GetBlogsService } from '../service/get-blogs.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  IdBlog: any = "";
  constructor(private service: GetBlogsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param: ParamMap) => {
      let id = parseInt(param.get("id"))
      this.service.s_get_blogs_by_id(id).subscribe(data => {
        this.IdBlog = data;
      })
    })
  }

}

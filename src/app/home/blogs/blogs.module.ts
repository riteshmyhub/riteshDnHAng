import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogsRoutingModule } from './blogs-routing.module';
import { SharedModule } from '../shared/shared/shared.module';
import { GetBlogsService } from './service/get-blogs.service';
import { BlogComponent } from './blog/blog.component';


@NgModule({
  declarations: [BlogComponent],
  imports: [
    CommonModule,
    BlogsRoutingModule,
    SharedModule
  ],
  providers: [GetBlogsService]
})
export class BlogsModule { }

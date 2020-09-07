import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminPanelComponent } from './admin-panel.component';
import { AdminBlogsComponent } from './admin-blogs/admin-blogs.component';
import { AdminCareerComponent } from './admin-career/admin-career.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { AdminIndustriesComponent } from './admin-industries/admin-industries.component';


const routes: Routes = [
  { path: "",children:[
    {path: "", component: AdminPanelComponent},
    {path:"adminBlogs",component:AdminBlogsComponent},
    {path:"Careers",component:AdminCareerComponent},
    {path:"Products",component:AdminProductsComponent},
    {path:"Industries",component:AdminIndustriesComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPanelRoutingModule { }

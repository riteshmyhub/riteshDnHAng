import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminPanelRoutingModule } from './admin-panel-routing.module';
import { AdminBlogsComponent } from './admin-blogs/admin-blogs.component';
import { AdminIndustriesComponent } from './admin-industries/admin-industries.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { AdminCareerComponent } from './admin-career/admin-career.component';
import { CreateBlogsService } from './service/create-blogs.service';
import { SharedModule } from '../shared/shared/shared.module';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { AddIndustriesComponent } from './admin-industries/add-industries/add-industries.component';
import { AddStudiesComponent } from './admin-industries/add-studies/add-studies.component';
import { IndustriesService } from './service/industries.service';
import { AdminCaseService } from './service/admin-case.service';


@NgModule({
  declarations: [AdminBlogsComponent, AdminIndustriesComponent, AdminProductsComponent, AdminCareerComponent, AddIndustriesComponent, AddStudiesComponent],
  imports: [
    CommonModule,
    AdminPanelRoutingModule,
    SharedModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger',
    }),
  ],
  providers: [CreateBlogsService, IndustriesService],
  entryComponents: [AddIndustriesComponent, AddStudiesComponent,AdminCaseService]
})
export class AdminPanelModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndustriesRoutingModule } from './industries-routing.module';
import { IndustrieSectorComponent } from './industrie-sector/industrie-sector.component';
import { SharedModule } from '../shared/shared/shared.module';
import { UserIndustriesService } from './service/user-industries.service';



@NgModule({
  declarations: [IndustrieSectorComponent],
  imports: [
    CommonModule,
    IndustriesRoutingModule,
    SharedModule
  ],
  providers: [UserIndustriesService]
})
export class IndustriesModule { }

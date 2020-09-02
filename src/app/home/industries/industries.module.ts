import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndustriesRoutingModule } from './industries-routing.module';
import { IndustrieSectorComponent } from './industrie-sector/industrie-sector.component';



@NgModule({
  declarations: [IndustrieSectorComponent],
  imports: [
    CommonModule,
    IndustriesRoutingModule
  ]
})
export class IndustriesModule { }

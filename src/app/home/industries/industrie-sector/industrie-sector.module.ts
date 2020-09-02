import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndustrieSectorRoutingModule } from './industrie-sector-routing.module';
import { CaseComponent } from './case/case.component';
import { SectorCaseStudiesComponent } from './sector-case-studies/sector-case-studies.component';


@NgModule({
  declarations: [CaseComponent,SectorCaseStudiesComponent],
  imports: [
    CommonModule,
    IndustrieSectorRoutingModule
  ]
})
export class IndustrieSectorModule { }

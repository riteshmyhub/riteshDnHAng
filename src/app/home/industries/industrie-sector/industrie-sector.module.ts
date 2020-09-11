import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndustrieSectorRoutingModule } from './industrie-sector-routing.module';
import { CaseComponent } from './case/case.component';
import { SectorCaseStudiesComponent } from './sector-case-studies/sector-case-studies.component';
import { GetIndusService } from './service/get-indus.service';
import { SharedModule } from '../../shared/shared/shared.module';


@NgModule({
  declarations: [CaseComponent, SectorCaseStudiesComponent],
  imports: [
    CommonModule,
    IndustrieSectorRoutingModule,
    SharedModule
  ],
  providers: [GetIndusService]
})
export class IndustrieSectorModule { }

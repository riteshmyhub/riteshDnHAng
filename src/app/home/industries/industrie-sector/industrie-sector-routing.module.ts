import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndustrieSectorComponent } from './industrie-sector.component';
import { SectorCaseStudiesComponent } from './sector-case-studies/sector-case-studies.component';
import { CaseComponent } from './case/case.component';


const routes: Routes = [
  {path:'',children:[
    {path:'',component:IndustrieSectorComponent},
    {path:'CaseStudies',component:SectorCaseStudiesComponent},
    {path:'case',component:CaseComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndustrieSectorRoutingModule { }

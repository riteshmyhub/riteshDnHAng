import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndustriesComponent } from './industries.component';
import { IndustrieSectorComponent } from './industrie-sector/industrie-sector.component';
import { SectorCaseStudiesComponent } from './industrie-sector/sector-case-studies/sector-case-studies.component';
import { CaseComponent } from './industrie-sector/case/case.component';


const routes: Routes = [
  { path: '' , children:[
    {path:'',component: IndustriesComponent},
    {path:'',children:[
        {path:'',children:[
        { path: "Sector/:id", loadChildren: () => import('./industrie-sector/industrie-sector.module').then(m => m.IndustrieSectorModule) },
      ]},
     
    ]}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndustriesRoutingModule { }

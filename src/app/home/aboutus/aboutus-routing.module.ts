import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus.component';
import { CsrComponent } from './csr/csr.component';
import { CertificationComponent } from './certification/certification.component';
import { RndcenterComponent } from './rndcenter/rndcenter.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { OverviewComponent } from './overview/overview.component';



const routes: Routes = [
   {path:'',children:[
     {path:'',component:AboutusComponent},
     {path: 'CSR' , component: CsrComponent},
     {path: 'certification' , component: CertificationComponent},
     {path: 'RNDCenter' , component: RndcenterComponent},
     {path: 'testimonial' , component: TestimonialComponent},
     {path:'Overview',component:OverviewComponent}
   ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutusRoutingModule { }

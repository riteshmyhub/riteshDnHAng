import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { DashboardComponent } from '../home/dashboard/dashboard.component';
import { BlogsComponent } from './blogs/blogs.component';
import { ProductComponent } from './product/product.component';
import { IndustriesComponent } from './industries/industries.component';
import { CareerComponent } from './career/career.component';
import { NetworkComponent } from './network/network.component';
import { ContactComponent } from './contact/contact.component';
import { SearchComponent } from './search/search.component';
import { CasestudyComponent } from './casestudy/casestudy.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { KnowlagebaseComponent } from './knowlagebase/knowlagebase.component';
import { OverviewComponent } from './overview/overview.component';
import { CsrComponent } from './aboutus/csr/csr.component';
import { CertificationComponent } from './aboutus/certification/certification.component';
import { RndcenterComponent } from './aboutus/rndcenter/rndcenter.component';
import { TestComponentRenderer } from '@angular/core/testing';
import { TestimonialComponent } from './aboutus/testimonial/testimonial.component';
import { AptitudetestComponent } from './career/aptitudetest/aptitudetest.component';
import { FaqsComponent } from './knowlagebase/faqs/faqs.component';
import { StudentcenterComponent } from './knowlagebase/studentcenter/studentcenter.component';
import { CaseComponent } from './casestudy/case/case.component';
import { BlogComponent } from './blogs/blog/blog.component';

import { AllproductComponent } from './product/allproduct/allproduct.component';

import { Slidehome1Component } from './slidehome1/slidehome1.component';
import { Slidehome5Component } from './slidehome5/slidehome5.component';
import { Slidehome4Component } from './slidehome4/slidehome4.component';
import { Slidehome3Component } from './slidehome3/slidehome3.component';
import { Slidehome2Component } from './slidehome2/slidehome2.component';
import { MainproductComponent } from './product/mainproduct/mainproduct.component';
import { TimelineComponent } from './timeline/timeline.component';



const routes: Routes = [
  {
    path: 'home', component: HomeComponent,
    children: [
    {path: '', component: DashboardComponent},
    {path: '', redirectTo: 'dashboard', pathMatch: 'full'},



    // slide home component
    {path: 'slide1' , component: Slidehome1Component},
    {path: 'slide2' , component: Slidehome2Component},
    {path: 'slide3' , component: Slidehome3Component},
    {path: 'slide4' , component: Slidehome4Component},
    {path: 'slide5' , component: Slidehome5Component},
    // 


    // componenet product
    {path: 'product' , component: ProductComponent},
    // child component
    {path: 'product/allproduct' , component: AllproductComponent},
    {path: 'mainproduct' , component: MainproductComponent},
    

    // componenet
    {path: 'industries' , component: IndustriesComponent},
    // child component

    

    // componenet
    {path: 'Career' , component: CareerComponent},
    {path: 'Career/aptitude' , component: AptitudetestComponent},
    // child component

     

    // componenet
    {path: 'network' , component: NetworkComponent},
    // child component

    

    // componenet
    {path: 'contact' , component: ContactComponent},
    // child component

    

    // componenet
    {path: 'Search' , component:  SearchComponent},
    // child component

    

    // componenet
    {path: 'blogs' , component: BlogsComponent},
    // child component
    {path: 'blogs/blog' , component: BlogComponent},
    

    // componenet
    {path: 'Casestudy' , component: CasestudyComponent},
    // child component
    {path: 'Casestudy/case' , component: CaseComponent},

    

    // componenet
    {path: 'aboutus' , component: AboutusComponent},
    // child component
    {path: 'aboutus/CSR' , component: CsrComponent},
    {path: 'aboutus/certification' , component: CertificationComponent},
    {path: 'aboutus/RNDCenter' , component: RndcenterComponent},
    {path: 'aboutus/testimonial' , component: TestimonialComponent},
    

    // componenet
    {path: 'overview' , component: OverviewComponent},
    // child component

  // componenet
    {path: 'timeline' , component: TimelineComponent},

    // componenet
  {path: 'Knowlagebase' , component: KnowlagebaseComponent},
    // child component
    {path: 'Knowlagebase/FAQ' , component: FaqsComponent},
    {path: 'Knowlagebase/studentCenter' , component: StudentcenterComponent},
    
    
        ]

  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule,
    CommonModule,
  ]
})
export class HomeRoutingModule { }

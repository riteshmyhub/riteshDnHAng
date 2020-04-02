import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BlogsComponent } from './blogs/blogs.component';
import { ProductComponent } from './product/product.component';
import { IndustriesComponent } from './industries/industries.component';
import { CareerComponent } from './career/career.component';
import { NetworkComponent } from './network/network.component';
import { ContactComponent } from './contact/contact.component';
import { SearchComponent } from './search/search.component';
import { CasestudyComponent } from './casestudy/casestudy.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { OverviewComponent } from './overview/overview.component';
import { KnowlagebaseComponent } from './knowlagebase/knowlagebase.component';
import { CsrComponent } from './aboutus/csr/csr.component';
import { CertificationComponent } from './aboutus/certification/certification.component';
import { RndcenterComponent } from './aboutus/rndcenter/rndcenter.component';
import { TestimonialComponent } from './aboutus/testimonial/testimonial.component';
import { AptitudetestComponent } from './career/aptitudetest/aptitudetest.component';
import { BlogComponent } from './blogs/blog/blog.component';
import { FaqsComponent } from './knowlagebase/faqs/faqs.component';
import { StudentcenterComponent } from './knowlagebase/studentcenter/studentcenter.component';
import { CaseComponent } from './casestudy/case/case.component';
import { AllproductComponent } from './product/allproduct/allproduct.component';
import { MainproductComponent } from './product/mainproduct/mainproduct.component';
import { Slidehome1Component } from './slidehome1/slidehome1.component';
import { Slidehome2Component } from './slidehome2/slidehome2.component';
import { Slidehome3Component } from './slidehome3/slidehome3.component';
import { Slidehome4Component } from './slidehome4/slidehome4.component';
import { Slidehome5Component } from './slidehome5/slidehome5.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent,
    BlogsComponent,
    ProductComponent,
    IndustriesComponent,
    CareerComponent,
    NetworkComponent,
    ContactComponent,
    SearchComponent,
    CasestudyComponent,
    AboutusComponent,
    OverviewComponent,
    KnowlagebaseComponent,
    CsrComponent,
    CertificationComponent,
    RndcenterComponent,
    TestimonialComponent,
    AptitudetestComponent,
    BlogComponent,
    FaqsComponent,
    StudentcenterComponent,
    CaseComponent,
    AllproductComponent,
    MainproductComponent,
    Slidehome1Component,
    Slidehome2Component,
    Slidehome3Component,
    Slidehome4Component,
    Slidehome5Component,
    FooterComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }

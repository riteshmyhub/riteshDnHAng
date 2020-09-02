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
import { AboutusComponent } from './aboutus/aboutus.component';
import { KnowlagebaseComponent } from './knowlagebase/knowlagebase.component';
import { AptitudetestComponent } from './career/aptitudetest/aptitudetest.component';
import { BlogComponent } from './blogs/blog/blog.component';
import { FaqsComponent } from './knowlagebase/faqs/faqs.component';
import { StudentcenterComponent } from './knowlagebase/studentcenter/studentcenter.component';
import { FooterComponent } from './footer/footer.component';
import { TimelineComponent } from './timeline/timeline.component';
import { Slidehome1Component } from './dashboard/slides/slidehome1/slidehome1.component';
import { Slidehome2Component } from './dashboard/slides/slidehome2/slidehome2.component';
import { Slidehome3Component } from './dashboard/slides/slidehome3/slidehome3.component';
import { Slidehome4Component } from './dashboard/slides/slidehome4/slidehome4.component';
import { Slidehome5Component } from './dashboard/slides/slidehome5/slidehome5.component';
import { CouterPartComponent } from './dashboard/slides/slidehome2/couter-part/couter-part.component';
import { AngularFullpageModule } from '@fullpage/angular-fullpage';
import { VacanciesComponent } from './career/vacancies/vacancies.component';
import { QuestionsComponent } from './career/aptitudetest/questions/questions.component';
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
    AboutusComponent,
    KnowlagebaseComponent,
    AptitudetestComponent,
    BlogComponent,
    FaqsComponent,
    StudentcenterComponent,
    Slidehome1Component,
    Slidehome2Component,
    Slidehome3Component,
    Slidehome4Component,
    Slidehome5Component,
    FooterComponent,
    TimelineComponent,
    CouterPartComponent,
    VacanciesComponent,
    QuestionsComponent,],
  imports: [
    CommonModule,
    HomeRoutingModule,
    AngularFullpageModule
  ]
})
export class HomeModule { }

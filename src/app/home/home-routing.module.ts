import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { DashboardComponent } from '../home/dashboard/dashboard.component';
import { BlogsComponent } from './blogs/blogs.component';
import { CareerComponent } from './career/career.component';
import { NetworkComponent } from './network/network.component';
import { ContactComponent } from './contact/contact.component';
import { SearchComponent } from './search/search.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { KnowlagebaseComponent } from './knowlagebase/knowlagebase.component';
import { AptitudetestComponent } from './career/aptitudetest/aptitudetest.component';
import { FaqsComponent } from './knowlagebase/faqs/faqs.component';
import { StudentcenterComponent } from './knowlagebase/studentcenter/studentcenter.component';
import { BlogComponent } from './blogs/blog/blog.component';
import { TimelineComponent } from './timeline/timeline.component';
import { Slidehome1Component } from './dashboard/slides/slidehome1/slidehome1.component';
import { Slidehome2Component } from './dashboard/slides/slidehome2/slidehome2.component';
import { Slidehome3Component } from './dashboard/slides/slidehome3/slidehome3.component';
import { Slidehome4Component } from './dashboard/slides/slidehome4/slidehome4.component';
import { Slidehome5Component } from './dashboard/slides/slidehome5/slidehome5.component';
import { VacanciesComponent } from './career/vacancies/vacancies.component';



const routes: Routes = [
  {
    path: 'home', component: HomeComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },



      // slide home component
      { path: 'slide1', component: Slidehome1Component },
      { path: 'slide2', component: Slidehome2Component },
      { path: 'slide3', component: Slidehome3Component },
      { path: 'slide4', component: Slidehome4Component },
      { path: 'slide5', component: Slidehome5Component },
      // 

      { path: "products", loadChildren: () => import('./product/product.module').then(m => m.ProductModule) },
    
      // componenet IndustriesModule
      { path: "industries", loadChildren: () => import('./industries/industries.module').then(m => m.IndustriesModule) },
      // child component

      // componenet
      { path: '',children:[
        {path: 'Career', component: CareerComponent},
        {path:'vacancies',component:VacanciesComponent},
        { path: 'aptitude', component: AptitudetestComponent },
      ]},
     
      // child component



      // componenet
      { path: 'network', component: NetworkComponent },
      // child component



      // componenet
      { path: 'contact', component: ContactComponent },
      // child component



      // componenet
      { path: 'Search', component: SearchComponent },
      // child component



      // componenet
      { path: 'blogs', component: BlogsComponent },
      // child component
      { path: 'blog', component: BlogComponent },


      // componenet AboutusModule
      { path: "aboutus", loadChildren: () => import('./aboutus/aboutus.module').then(m => m.AboutusModule) },

      // componenet
      { path: 'timeline', component: TimelineComponent },

      // componenet
      { path: 'Knowlagebase', component: KnowlagebaseComponent },
      // child component
      { path: 'Knowlagebase/FAQ', component: FaqsComponent },
      { path: 'Knowlagebase/studentCenter', component: StudentcenterComponent },
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

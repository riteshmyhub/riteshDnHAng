import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutusRoutingModule } from './aboutus-routing.module';
import { MainCardsComponent } from './certification/main-cards/main-cards.component';
import { CertificationComponent } from './certification/certification.component';
import { CsrComponent } from './csr/csr.component';
import { RndcenterComponent } from './rndcenter/rndcenter.component';
import { TestimonialComponent } from './testimonial/testimonial.component';


@NgModule({
  declarations: [MainCardsComponent, CertificationComponent, CsrComponent, RndcenterComponent, TestimonialComponent],
  imports: [
    CommonModule,
    AboutusRoutingModule
  ]
})
export class AboutusModule { }

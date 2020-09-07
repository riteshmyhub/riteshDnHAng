import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CareerRoutingModule } from './career-routing.module';
import { AptitudetestComponent } from './aptitudetest/aptitudetest.component';
import { VacanciesComponent } from './vacancies/vacancies.component';
import { QuestionsComponent } from './aptitudetest/questions/questions.component';

@NgModule({
  declarations: [AptitudetestComponent,VacanciesComponent,QuestionsComponent],
  imports: [
    CommonModule,
    CareerRoutingModule
  ]
})
export class CareerModule { }

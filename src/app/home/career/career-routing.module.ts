import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CareerComponent } from './career.component';
import { AptitudetestComponent } from './aptitudetest/aptitudetest.component';
import { VacanciesComponent } from './vacancies/vacancies.component';
import { QuestionsComponent } from './aptitudetest/questions/questions.component';


const routes: Routes = [
  { path: '' ,children:[
    {path:'',component: CareerComponent },
    {path:'aptitude',component:AptitudetestComponent},
    {path:'vacancies',component:VacanciesComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CareerRoutingModule { }

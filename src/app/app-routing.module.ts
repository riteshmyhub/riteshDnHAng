import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeModule } from './home/home.module';

// import { HomeComponent } from './home/home.component';

const routes: Routes = [

    // {path: 'home' , component:HomeComponent},

  { path: ' ', loadChildren: () => import('./home/home.module').then(m => m.HomeModule ) },
  // {path: '', redirectTo: '/home', pathMatch: 'full'},

];
@NgModule({
  imports: [
    HomeModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

const AllModules = [
  HttpClientModule,
  ReactiveFormsModule,
  FormsModule 
]

@NgModule({
  imports: [
    AllModules,
    CommonModule,
  ],
  exports: [AllModules]
})
export class SharedModule { }

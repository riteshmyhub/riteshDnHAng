import { Component, OnInit } from '@angular/core';
import { AddIndustriesComponent } from './add-industries/add-industries.component';
import { AddStudiesComponent } from './add-studies/add-studies.component';
import { from } from 'rxjs';
@Component({
  selector: 'app-admin-industries',
  templateUrl: './admin-industries.component.html',
  styleUrls: ['./admin-industries.component.css']
})
export class AdminIndustriesComponent implements OnInit {

  loadHere;
  constructor() { }

  ngOnInit(): void {
  }
  DyLoad(Componentholder) {
    if (Componentholder === 'AddIndustries') {
      this.loadHere = AddIndustriesComponent;
    } else if (Componentholder === 'AddCaseStudies') {
      this.loadHere = AddStudiesComponent;
    }
    else {
      return null
    }
  }
  closedModel(param) {
    this.loadHere = param;
  }
}

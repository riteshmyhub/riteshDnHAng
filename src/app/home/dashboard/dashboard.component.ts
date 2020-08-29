import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  slide = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
  }
  constructor() {
  }

  ngOnInit(): void {
    
  }
}

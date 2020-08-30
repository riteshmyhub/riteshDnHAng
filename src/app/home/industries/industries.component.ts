import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-industries',
  templateUrl: './industries.component.html',
  styleUrls: ['./industries.component.css']
})
export class IndustriesComponent implements OnInit {
  popop: boolean = false;
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.popop = true;
    }, 2000);
  }
  noThanks(off) {
    this.popop = off;
  }
}

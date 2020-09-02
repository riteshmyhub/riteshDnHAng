import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-industrie-sector',
  templateUrl: './industrie-sector.component.html',
  styleUrls: ['./industrie-sector.component.css']
})
export class IndustrieSectorComponent implements OnInit {

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

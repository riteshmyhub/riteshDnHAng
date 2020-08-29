import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slidehome1',
  templateUrl: './slidehome1.component.html',
  styleUrls: ['./slidehome1.component.css']
})
export class Slidehome1Component implements OnInit {
  loadImg = false;
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.loadImg = true;
    }, 500);
  }

}

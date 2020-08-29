import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slidehome2',
  templateUrl: './slidehome2.component.html',
  styleUrls: ['./slidehome2.component.css']
})
export class Slidehome2Component implements OnInit {
  
  Manufacturers: any[] = [
     '../../../assets/10 Bureau Veritas.png' ,
     '../../../assets/dnv.png',
     '../../../assets/03 Nuclear Power Corporation of India Ltd.png',
     '../../../assets/07 Indian Register of Shipping.png'
  ]
  constructor() { }
  ngOnInit() {
  }
}

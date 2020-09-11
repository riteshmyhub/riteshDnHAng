import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.css']
})
export class NetworkComponent implements OnInit {
  constructor() { }
  data = "The Morgan Stanley Global Consumer & Retail Investor"
  ngOnInit(): void {
    console.log(this.data.length);

  }

}

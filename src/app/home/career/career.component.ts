import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-career",
  templateUrl: "./career.component.html",
  styleUrls: ["./career.component.css"],
})
export class CareerComponent implements OnInit {
  CareerCard: any[] = [
    { img: '../../../assets/career/c1.png', cardName: 'Sales & Marketing' },
    { img: '../../../assets/career/c2.png', cardName: 'Production & Planning' },
    { img: '../../../assets/career/c3.png', cardName: 'Research Development' },
    { img: '../../../assets/career/c4.png', cardName: 'Quality Control' },
    { img: '../../../assets/career/c5.png', cardName: 'Logistics & Supply' },
    { img: '../../../assets/career/c6.png', cardName: 'Information Technology' },
    { img: '../../../assets/career/c7.png', cardName: 'Legals & Corporate Affairs' },
    { img: '../../../assets/career/c8.png', cardName: 'Finance & Customer Support' },
  ]
  constructor() { }

  ngOnInit(): void { }
}

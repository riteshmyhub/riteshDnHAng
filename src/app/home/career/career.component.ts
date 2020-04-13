import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-career",
  templateUrl: "./career.component.html",
  styleUrls: ["./career.component.css"],
})
export class CareerComponent implements OnInit {
  card: any[] = [
    // card data 1
    {
      ImageUrl: "../../../assets/career/c1.png",
      heading: "Sales & Marketing",
    },
    // card data 2
    {
      ImageUrl: "../../../assets/career/c2.png",
      heading: "Production & Planning",
    },
    // card data 3
    {
      ImageUrl: "../../../assets/career/c3.png",
      heading: "Research Development",
    },
    // card data 4
    {
      ImageUrl: "../../../assets/career/c4.png",
      heading: "Quality Control",
    },
    // card data 5
    {
      ImageUrl: "../../../assets/career/c5.png",
      heading: "Logistics & Supply",
    },
    // card data 6
    {
      ImageUrl: "../../../assets/career/c6.png",
      heading: "Information Technology",
    },
    // card data 7
    {
      ImageUrl: "../../../assets/career/c7.png",
      heading: "Legals & Corporate Affairs",
    },
    // card data 8
    {
      ImageUrl: "../../../assets/career/c8.png",
      heading: "Finance & Customer Support",
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}

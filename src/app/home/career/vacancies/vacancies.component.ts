import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vacancies',
  templateUrl: './vacancies.component.html',
  styleUrls: ['./vacancies.component.css']
})
export class VacanciesComponent implements OnInit {
  Filtercard: any[] = [
    // card data 1
    {
      dropdownId: "one",
      dropdownHref: "#one",
      postname: "Sales & Marketing",
      reqId: "00001",
      location: "india",
      category: "Finance",
      posted: "April 15 ,2020",
      dropdowntext:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Reiciendis unde omnis, harum sint temporibus quibusdam optio accusamus voluptatum at illum voluptatem quam beatae debitis aliquam maxime. Pariatur ut dolorum iusto Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem, aliquid quae debitis quisquam commodi quas quos porro esse ipsam sunt alias. Nostrum consequatur alias voluptatem, incidunt earum quisquam sed est?",
    },
    {
      dropdownId: "two",
      dropdownHref: "#two",
      postname: "Area Sales Professional for Distributed Generation",
      reqId: "00002",
      location: "Algier, Alger Algeria ",
      category: "Sales",
      posted: "March 5, 2020",
      dropdowntext:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Reiciendis unde omnis, harum sint temporibus quibusdam optio accusamus voluptatum at illum voluptatem quam beatae debitis aliquam maxime. Pariatur ut dolorum iusto Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem, aliquid quae debitis quisquam commodi quas quos porro esse ipsam sunt alias. Nostrum consequatur alias voluptatem, incidunt earum quisquam sed est?",
    },
    {
      dropdownId: "three",
      dropdownHref: "#three",
      postname: "Software Engineer Solutions O&G",
      reqId: "00003",
      location: "Chennai, Tamil Nadu India",
      category: "Engineering",
      posted: "November 7, 2019",
      dropdowntext:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Reiciendis unde omnis, harum sint temporibus quibusdam optio accusamus voluptatum at illum voluptatem quam beatae debitis aliquam maxime. Pariatur ut dolorum iusto Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem, aliquid quae debitis quisquam commodi quas quos porro esse ipsam sunt alias. Nostrum consequatur alias voluptatem, incidunt earum quisquam sed est?",
    },
    {
      dropdownId: "four",
      dropdownHref: "#four",
      postname: "Technical Lead",
      reqId: "00004",
      location: "Chennai, Tamil Nadu India",
      category: "Research & Development",
      posted: "January 14, 2020",
      dropdowntext:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Reiciendis unde omnis, harum sint temporibus quibusdam optio accusamus voluptatum at illum voluptatem quam beatae debitis aliquam maxime. Pariatur ut dolorum iusto Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem, aliquid quae debitis quisquam commodi quas quos porro esse ipsam sunt alias. Nostrum consequatur alias voluptatem, incidunt earum quisquam sed est?",
    },
    {
      dropdownId: "five",
      dropdownHref: "#five",
      postname: "Executive - Projects",
      reqId: "00005",
      location: "Chennai, Tamil Nadu India",
      category: "Project Management",
      posted: "March 18, 2020",
      dropdowntext:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Reiciendis unde omnis, harum sint temporibus quibusdam optio accusamus voluptatum at illum voluptatem quam beatae debitis aliquam maxime. Pariatur ut dolorum iusto Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem, aliquid quae debitis quisquam commodi quas quos porro esse ipsam sunt alias. Nostrum consequatur alias voluptatem, incidunt earum quisquam sed est?",
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

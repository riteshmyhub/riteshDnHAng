import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vacancies',
  templateUrl: './vacancies.component.html',
  styleUrls: ['./vacancies.component.css']
})
export class VacanciesComponent implements OnInit {
  Vacancies: any[] = [
    // card data 1
    {
      Id: 1,
      get Idtarget() { return `#${this.Id}` },
      company:'Fencon Mazameer Facade Technology',
      postname: "Sales & Marketing",
      location: "india",
      category: "Finance",
      posted: "April 15 ,2020",
      dropdowntext:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Reiciendis unde omnis, harum sint temporibus quibusdam optio accusamus voluptatum at illum voluptatem quam beatae debitis aliquam maxime. Pariatur ut dolorum iusto Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem, aliquid quae debitis quisquam commodi quas quos porro esse ipsam sunt alias. Nostrum consequatur alias voluptatem, incidunt earum quisquam sed est?",
    },
    {
      Id: 2,
      get Idtarget() { return `#${this.Id}` },
      company:'Fencon Mazameer Facade Technology',
      postname: "Area Sales Professional for Distributed Generation",
      location: "Algier, Alger Algeria ",
      category: "Sales",
      posted: "March 5, 2020",
      dropdowntext:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Reiciendis unde omnis, harum sint temporibus quibusdam optio accusamus voluptatum at illum voluptatem quam beatae debitis aliquam maxime. Pariatur ut dolorum iusto Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem, aliquid quae debitis quisquam commodi quas quos porro esse ipsam sunt alias. Nostrum consequatur alias voluptatem, incidunt earum quisquam sed est?",
    },
    {
      Id: 3,
      get Idtarget() { return `#${this.Id}` },
      company:'Fencon Mazameer Facade Technology',
      postname: "Software Engineer Solutions O&G",
      location: "Chennai, Tamil Nadu India",
      category: "Engineering",
      posted: "November 7, 2019",
      dropdowntext:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Reiciendis unde omnis, harum sint temporibus quibusdam optio accusamus voluptatum at illum voluptatem quam beatae debitis aliquam maxime. Pariatur ut dolorum iusto Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem, aliquid quae debitis quisquam commodi quas quos porro esse ipsam sunt alias. Nostrum consequatur alias voluptatem, incidunt earum quisquam sed est?",
    },
    {
      Id: 4,
      get Idtarget() { return `#${this.Id}` },
      company:'Fencon Mazameer Facade Technology',
      postname: "Technical Lead",
      location: "Chennai, Tamil Nadu India",
      category: "Research & Development",
      posted: "January 14, 2020",
      dropdowntext:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Reiciendis unde omnis, harum sint temporibus quibusdam optio accusamus voluptatum at illum voluptatem quam beatae debitis aliquam maxime. Pariatur ut dolorum iusto Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem, aliquid quae debitis quisquam commodi quas quos porro esse ipsam sunt alias. Nostrum consequatur alias voluptatem, incidunt earum quisquam sed est?",
    },
    {
      Id: 5,
      get Idtarget() { return `#${this.Id}` },
      company:'Fencon Mazameer Facade Technology',
      postname: "Executive - Projects",
      location: "Chennai, Tamil Nadu India",
      category: "Project Management",
      posted: "March 18, 2020",
      dropdowntext:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Reiciendis unde omnis, harum sint temporibus quibusdam optio accusamus voluptatum at illum voluptatem quam beatae debitis aliquam maxime. Pariatur ut dolorum iusto Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem, aliquid quae debitis quisquam commodi quas quos porro esse ipsam sunt alias. Nostrum consequatur alias voluptatem, incidunt earum quisquam sed est?",
    },
  ];

  PopupModel = false;
  popupForm = true;
  popupdone = false;
  constructor() { }
  Popup() {
    this.PopupModel = true;
  }
  close() {
    this.PopupModel = false;
    setTimeout(() => {
      this.popupdone = false;
      this.popupForm = true;
    }, 1000);
  }
  submit() {
    setTimeout(() => {
      this.popupForm = false;
      this.popupdone = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

}

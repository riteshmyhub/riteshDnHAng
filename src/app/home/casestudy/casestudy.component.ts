import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-casestudy',
  templateUrl: './casestudy.component.html',
  styleUrls: ['./casestudy.component.css']
})
export class CasestudyComponent implements OnInit {
  casedata: any[] = [
    {heading:' The Morgan Stanley Global Consumer & Retail Investor Conference'},
    {heading:' The Morgan Stanley Global Consumer & Retail Investor Conference'},
    {heading:' The Morgan Stanley Global Consumer & Retail Investor Conference'},
    {heading:' The Morgan Stanley Global Consumer & Retail Investor Conference'},
    {heading:' The Morgan Stanley Global Consumer & Retail Investor Conference'},
    {heading:' The Morgan Stanley Global Consumer & Retail Investor Conference'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sector-case-studies',
  templateUrl: './sector-case-studies.component.html',
  styleUrls: ['./sector-case-studies.component.css']
})
export class SectorCaseStudiesComponent implements OnInit {
  casedata: any[] = [
    { heading: ' The Morgan Stanley Global Consumer & Retail Investor Conference' },
    { heading: ' The Morgan Stanley Global Consumer & Retail Investor Conference' },
    { heading: ' The Morgan Stanley Global Consumer & Retail Investor Conference' },
    { heading: ' The Morgan Stanley Global Consumer & Retail Investor Conference' },
    { heading: ' The Morgan Stanley Global Consumer & Retail Investor Conference' },
    { heading: ' The Morgan Stanley Global Consumer & Retail Investor Conference' }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { GetIndusService } from '../service/get-indus.service';

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
  constructor(private service: GetIndusService) { }
  test = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non corporis, repellendus doloremque odio vitae beatae debit.'
  caseStudy: any[];
  caseSelected: Number;
  listCase: any[];
  ngOnInit(): void {
    this.C_get_caseStudys()
  }
  C_get_caseStudys() {
    this.service.S_get_caseStudy().subscribe(res => {
      this.caseStudy = res
    })
  }
  onCaseSelected(caseSelected: any) {
    this.service.S_get_selected_case(caseSelected).subscribe(data => this.listCase = data)
  }
  // -----------------------
  getHeading(obj) {
    return console.log(obj.id);
  }
}

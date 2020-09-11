import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { UserIndustriesService } from '../service/user-industries.service';
import { off } from 'process';

@Component({
  selector: 'app-industrie-sector',
  templateUrl: './industrie-sector.component.html',
  styleUrls: ['./industrie-sector.component.css']
})
export class IndustrieSectorComponent implements OnInit {
  Industry: any = "";

  // 
  popop: boolean = false;
  constructor(private route: ActivatedRoute, private service: UserIndustriesService) { }

  ngOnInit(): void {
    this.IndustryPage()
    setTimeout(() => {
      this.popop = true;
    }, 2000);
  }

  noThanks(off) {
    this.popop = off;
  }
  IndustryPage() {
    this.route.paramMap.subscribe((param: ParamMap) => {
      let id = parseInt(param.get("id"))
      this.service.s_get_Industry_by_id(id).subscribe(data => {
        this.Industry = data
      })
    })
  }
}

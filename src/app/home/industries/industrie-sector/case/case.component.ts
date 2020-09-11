import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { GetIndusService } from '../service/get-indus.service';

@Component({
  selector: 'app-case',
  templateUrl: './case.component.html',
  styleUrls: ['./case.component.css']
})
export class CaseComponent implements OnInit {
  mainCase: any = "";

  constructor(private route: ActivatedRoute, private service: GetIndusService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param: ParamMap) => {
      let id = parseInt(param.get("id"))
      this.service.S_get_case_id(id).subscribe(data => {
        this.mainCase = data;
      })
    })
  }

}

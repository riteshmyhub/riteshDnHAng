import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { casetype } from '../../../models/casetype.model';
import { AdminCaseService } from '../../service/admin-case.service';
@Component({
  selector: 'app-add-studies',
  templateUrl: './add-studies.component.html',
  styleUrls: ['./add-studies.component.css']
})
export class AddStudiesComponent implements OnInit {
  CaseForm: FormGroup;
  industries = [];
  caseSelected = Number;
  listCase = [];
  CaseId = null;
  constructor(private FB: FormBuilder, private service: AdminCaseService) { }
  data;
  ngOnInit(): void {
    this.CaseForm = this.FB.group({
      industryId: ['', [Validators.required]],
      heading: ['', [Validators.required]],
      description: ['', [Validators.required]],
      productGroup: ['', [Validators.required]],
      analysis: ['', [Validators.required]],
      solution: ['', [Validators.required]],
      imgSolution: ['', [Validators.required]],
      process: ['', [Validators.required]],
    })
    this.C_get_industries()
  }
  c_update_case(param: number) {
    this.service.S_get_case_id(param).subscribe(xyz => {
      this.CaseId = param;
      this.CaseForm.controls["industryId"].setValue(xyz.industryId)
      this.CaseForm.controls["heading"].setValue(xyz.heading)
      this.CaseForm.controls["description"].setValue(xyz.description)
      this.CaseForm.controls["productGroup"].setValue(xyz.productGroup)
      this.CaseForm.controls["analysis"].setValue(xyz.analysis)
      this.CaseForm.controls["solution"].setValue(xyz.solution)
      this.CaseForm.controls["imgSolution"].setValue(xyz.imgSolution)
      this.CaseForm.controls["process"].setValue(xyz.process)
    })
  }
  submit() {
    let output = this.CaseForm.value;
    console.log(output);
    this.C_post_selected_case(output)
    this.data = output;
    this.CaseForm.reset()
  }
  // ___________http method______________
  C_get_industries() {
    this.service.S_get_industries_api().subscribe(res => this.industries = res)
  }
  onCaseSelected(caseSelected: any) {
    this.service.S_get_selected_case(caseSelected).subscribe(data => this.listCase = data)
  }
  C_post_selected_case(abc: casetype) {
    if (this.CaseId == null) {
      this.service.S_post_selected_case(abc).subscribe(data => {
        this.C_get_industries()
      })
    } else {
      abc.id = this.CaseId
      this.service.s_update_Industries(abc).subscribe(data => {
        this.C_get_industries()
        this.CaseId = null;
      })
    }

  }
  C_delete_case(CaseID) {
    this.service.s_delete_case(CaseID).subscribe(xyz => {
      this.C_get_industries()
    })
  }
}


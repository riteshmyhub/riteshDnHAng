import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { industries } from '../../../models/industries.model';
import { IndustriesService } from '../../service/industries.service';
@Component({
  selector: 'app-add-industries',
  templateUrl: './add-industries.component.html',
  styleUrls: ['./add-industries.component.css']
})
export class AddIndustriesComponent implements OnInit {
  IndustriesForm: FormGroup;
  Industries = [];
  IndustriesId = null;
  constructor(private service: IndustriesService, private FB: FormBuilder) { }
  // image description heading
  ngOnInit(): void {
    this.IndustriesForm = this.FB.group({
      heading: ['', [Validators.required]],
      image: ['', [Validators.required]],
      description: ['', [Validators.required]],
    })
    this.c_get_industries()
  }
  c_update_industries(param: number) {
    this.service.target_Industries_id(param).subscribe(xyz => {
      this.IndustriesId = param;
      this.IndustriesForm.controls["heading"].setValue(xyz.heading)
      this.IndustriesForm.controls["image"].setValue(xyz.image)
      this.IndustriesForm.controls["description"].setValue(xyz.description)
    })
  }
  public btnlimt: boolean;
  submit() {
    let output = this.IndustriesForm.value;
    console.log(output);
    this.c_post_industries(output)
    this.IndustriesForm.reset()
  }

  c_post_industries(abc: industries) {
    if (this.IndustriesId == null) {
      this.service.s_post_Industries(abc).subscribe(res => {
        this.c_get_industries()
      })
    } else {
      abc.id = this.IndustriesId
      this.service.s_update_Industries(abc).subscribe(res => {
        this.c_get_industries()
        this.IndustriesId = null;
      })
    }
  }
  c_get_industries() {
    this.service.s_get_Industries().subscribe(res => this.Industries = res)
  }

  // load card form
  public active_Css;
  public cardForm = false;
  cardOpen(state) {
    setTimeout(() => {
      this.cardForm = state;
      this.active_Css= 'card_btn_active';
    }, 700);
  }
}

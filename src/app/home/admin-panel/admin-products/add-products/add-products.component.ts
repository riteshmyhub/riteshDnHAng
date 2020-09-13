import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {
  active: boolean = false;
  name: string;
  popup = {
    toggle: {
      text: '',
      btn: '',
      message: '',
    }
  }
  constructor() { }

  ngOnInit(): void {
  }
  modelToggle(props: boolean, message: string, color: string) {
    this.active = props;
    this.popup.toggle.message = message;
    this.popup.toggle.btn = `btn btn-${color} btn-lg my-2`;
    this.popup.toggle.text = `text-${color} headind-2`;
  }
}

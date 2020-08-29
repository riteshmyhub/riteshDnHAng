import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-couter-part',
  template: `<h1 class="text-center" style="color: var(--main-parent-colorOne);">
  <span id="count5" class="sub_home_grid_six_number">
      {{ count }}
  </span>+
   </h1>
   <h6 class="sub_home_grid_six_text">{{couterName}}</h6>
   `,
  styleUrls: ['./couter-part.component.css']
})
export class CouterPartComponent implements OnInit {
  @Input('end') numbers: number;
  @Input('couterName') couterName: number;
  end;
  count: number = 1;
  constructor() { }
  counter(end, duration) {
    let timer = setInterval(() => {
      this.count++;
      for (let i = end; i == this.count; i++) {
        clearInterval(timer);
      }
    }, duration);
  }
  ngOnInit(): void {
    this.counter(this.numbers, 30)
  }

}

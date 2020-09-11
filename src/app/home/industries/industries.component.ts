import { Component, OnInit } from '@angular/core';
import { UserIndustriesService } from './service/user-industries.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-industries',
  templateUrl: './industries.component.html',
  styleUrls: ['./industries.component.css']
})
export class IndustriesComponent implements OnInit {
  Industries = []
  popop: boolean = false;
  cardId: number;
  constructor(private service: UserIndustriesService, private route: Router) { }
  cardNav(props: number) {
    this.cardId = props;
  }
  ngOnInit(): void {
    this.C_get_Industries()
  }
  C_get_Industries() {
    this.service.S_get_Industries().subscribe(res => this.Industries = res)
  }
  C_get_Industry_by_id(Industry) {
    this.route.navigate(['/Sector',Industry.id])
  }
  // 
  alwaysFromTop(event) {
    window.scroll(0, 0);
  }
}

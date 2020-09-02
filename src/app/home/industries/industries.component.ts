import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-industries',
  templateUrl: './industries.component.html',
  styleUrls: ['./industries.component.css']
})
export class IndustriesComponent implements OnInit {
  Industries: any[] = [
    { id: 1, name: 'CEMENT PLANTS', link: './../../../assets/INDUSTRIES/cement_plant.png' },
    { id: 2, name: 'MARINE SECTOR', link: './../../../assets/INDUSTRIES/marine_sector.png' },
    { id: 3, name: 'EARTH MOVING', link: './../../../assets/INDUSTRIES/earth_moving.png' },
    { id: 4, name: 'POWER SECTOR', link: './../../../assets/INDUSTRIES/power_sector.png' },
    { id: 5, name: 'RAILWAY SECTOR', link: './../../../assets/INDUSTRIES/railway_sector.png' },
    { id: 6, name: 'STEEL INDUSTRY', link: './../../../assets/INDUSTRIES/steel_industry.png' },
    { id: 7, name: 'SUGAR PLANTS', link: './../../../assets/INDUSTRIES/sugar_plant.png' },
    { id: 8, name: 'TRANSPORT SECTOR', link: './../../../assets/INDUSTRIES/transport_sector.png' },
  ]
  popop: boolean = false;
  cardId: number;
  constructor() { }
  cardNav(props: number) {
    this.cardId = props;
  }
  ngOnInit(): void {

  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  categories: any[] = [
    { id: 1, name: 'Welding Machine', img: '../../../assets/product/Gas_Welder.png' },
    { id: 2, name: 'MIG Welding Machine', img: '../../../assets/product/MIG_Welding.png' },
    { id: 3, name: 'Welding accessories', img: '../../../assets/product/Welding_accessories.png' },
    { id: 4, name: 'plastic Welding Machine', img: '../../../assets/product/plastic_Welding.png' },
    { id: 5, name: 'Gas Welder', img: '../../../assets/product/gas-welding-machine.png' },
    { id: 6, name: 'Tig Welding Spares', img: '../../../assets/product/Tig_Welding_Spares.png' },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

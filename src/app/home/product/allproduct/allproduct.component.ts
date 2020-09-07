import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-allproduct',
  templateUrl: './allproduct.component.html',
  styleUrls: ['./allproduct.component.css']
})
export class AllproductComponent implements OnInit {
  Products: any[] = [
    {
      id: 1,
      name: 'Wuerth MIG Welding System , Current: 20-250 A',
      img: 'https://2.imimg.com/data2/TO/ME/MY-/mig-welding-machine-250x250.jpg',
      price: 'Rs 1.29 Lakh/ Unit',
      description: 'We hold specialization in offering a broad array of TIG Cold Wire Feeders, which facilitates automated TIG welding. These feeders also assist in enhancing the productivity of appropriate manual welding processes. The wire guiding parts up to the welding arc, electrical control systems and mechanical drive units are the main dff',
      link: '../Mainproduct'
    },
    {
      id: 2,
      name: 'Wuerth Multifunction Spot Welder Machine 0691500221, Rated Input Power: 40 Kw',
      img: 'https://5.imimg.com/data5/RR/JF/MY-5433559/mig-mag-welding-system-250x250.jpg',
      price: 'Rs 28,000/ Piece',
      description: 'We hold specialization in offering a broad array of TIG Cold Wire Feeders, which facilitates automated TIG welding. These feeders also assist in enhancing the productivity of appropriate manual welding processes. The wire guiding parts up to the welding arc, electrical control systems and mechanical drive units are the main dff',
      link: './Mainproduct'
    },
    {
      id: 3,
      name: 'SAI Single Phase,Three Phase Micormig Inverter Synergic Welding Machine',
      img: 'https://5.imimg.com/data5/RB/SA/MY-1036069/digital-controlled-hi-tech-welding-machines-250x250.jpg',
      price: 'Rs 2 Lakh/Piece',
      description: 'We hold specialization in offering a broad array of TIG Cold Wire Feeders, which facilitates automated TIG welding. These feeders also assist in enhancing the productivity of appropriate manual welding processes. The wire guiding parts up to the welding arc, electrical control systems and mechanical drive units are the main dff',
      link: './Mainproduct'
    },
    {
      id: 4,
      name: 'Shine Yellow DC Portable Welding Generator With Auxiliary Supply, Shine Wel Gen',
      img: 'https://5.imimg.com/data5/VJ/TP/MY-6089537/dc-portable-welding-generator-with-auxiliary-supply-250x250.jpg',
      price: 'Rs 2 Lakh/Piece',
      description: 'Since its inception in 1986, Shine Electricals India Pvt. Ltd., grown into a leading Manufacturer, Exporter, and Trader of a wide gamut of superior quality ARC Inverter Welding Machine, Plasma Cutter, Battery Charger, Butt welder, CO2 Welding Guns, Tip Holder, Cooling Fan, Mig Torch, Transformer Parts, Electric Inverter, etc.',
      link: './Mainproduct'
    },
    {
      id: 5,
      name: 'Trolley Mounted Welding Generator, CWG-40SD, For Construction',
      img: 'https://5.imimg.com/data5/BI/LH/MY-6690679/trolley-mounted-welding-generator-250x250.jpg',
      price: 'Rs 3.85 Lakh/Piece',
      description: 'Since its inception in 1986, Shine Electricals India Pvt. Ltd., grown into a leading Manufacturer, Exporter, and Trader of a wide gamut of superior quality ARC Inverter Welding Machine, Plasma Cutter, Battery Charger, Butt welder, CO2 Welding Guns, Tip Holder, Cooling Fan, Mig Torch, Transformer Parts, Electric Inverter, etc.',
      link: './Mainproduct'
    },
  ]
  produtname = 'Wuerth Multifunction Spot Welder Machine 0691500221, Rated Input Power: 40 Kw';
  description = 'We hold specialization in offering a broad array of TIG Cold Wire Feeders, which facilitates automated TIG welding. These feeders also assist in enhancing the productivity of appropriate manual welding processes. The wire guiding parts up to the welding arc, electrical control systems and mechanical drive units are the main dff'
  constructor() { }

  ngOnInit(): void {
  }

}

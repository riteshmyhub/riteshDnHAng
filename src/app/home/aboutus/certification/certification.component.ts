import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certification',
  templateUrl: './certification.component.html',
  styleUrls: ['./certification.component.css']
})
export class CertificationComponent implements OnInit {
  card: any = [
    { id: 1, link: '../../../../assets/certication_img/certiefication1.png' ,Brands:'unknow'},
    { id: 2, link: '../../../../assets/certication_img/certiefication2.png' ,Brands:'Indian Register of Shipping'},
    { id: 3, link: '../../../../assets/certication_img/certiefication3.png' ,Brands:'bureau veritas'},
    { id: 4, link: '../../../../assets/certication_img/certiefication4.png' ,Brands:'rdsc'},
    { id: 5, link: '../../../../assets/certication_img/certiefication5.png' ,Brands:'liod of register'},
    { id: 6, link: '../../../../assets/certication_img/certiefication6.png' ,Brands:'abs'},
    { id: 7, link: '../../../../assets/certication_img/certiefication7.png' ,Brands:'pubi'},
    { id: 8, link: '../../../../assets/certication_img/certiefication8.png' ,Brands:'bureau indian standard'},
    { id: 9, link: '../../../../assets/certication_img/certiefication9.png' ,Brands:'ibr approved'},
    { id: 10, link: '../../../../assets/certication_img/certiefication10.png' ,Brands:'toyo engineering'},
    { id: 11, link: '../../../../assets/certication_img/certiefication11.png' ,Brands:'nabl'},
  ]
  constructor() { }
  ngOnInit(): void {

  }

}

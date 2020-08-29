import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main-cards',
  templateUrl: './main-cards.component.html',
  styleUrls: ['./main-cards.component.css']
})
export class MainCardsComponent implements OnInit {
  @Input('CardData') allCard: any[];

  placeholder = true;
  Certifications = false;
  constructor() { }
  cardId;
  NavCard(id) {
    console.log(id);
    this.cardId = id;
    this.placeholder = false;
  }
  ngOnInit(): void {
    console.log();
  }
  // Certifications popup 
  popup() {
    this.Certifications = true;
  }
  closed() {
    this.Certifications = false;
  }
}

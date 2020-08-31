import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  question_paper: any[] = [
    {
      id: '1',
      text: 'which will divide 42 and 7 without leaving any remainder ? (7)',
      option: ['336', '480', '126', 'None of these']
    },
    {
      id: '2',
      text: 'Output of a particular program follows the below pattern. Can you find the next number? (1) 173, 151, 129, 107, _____',
      option: ['84', '85', '82', 'None of these']
    },
    {
      id: '3',
      text: 'By how much is 3/4th of 568 lesser than 7/8th of 1008? (357)',
      option: ['476', '466', '456', 'None of these']
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

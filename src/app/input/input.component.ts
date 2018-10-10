import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  answerQuestion = [{
      questionForInp: 'Write question...',
      answerTxt: 'Add your answer...'
  }]

  onkeyup(e) {
    this.answerQuestion[0].questionForInp = e
  }
  onkeyupAnswer(e){
      this.answerQuestion[0].answerTxt = e
  }
  constructor() { }

  ngOnInit() {
  }

}

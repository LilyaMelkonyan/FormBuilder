import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css'],
})
export class CheckComponent implements OnInit {
    @ViewChild('valOpt') val:ElementRef;
    option: any[] = ['click on me'];
    question: string = "Write question...";

    onkeyup(qst){
        this.question = qst
    }

    addOpt(){
        this.option.push('click on me')
    }

    optVal(x){
        this.option.splice(x.srcElement.id,1, x.srcElement.textContent);
        console.log(this.option)
    }

  constructor() { }

  ngOnInit() {
  }

}

import {Component, ElementRef, OnInit, Output, ViewChild, EventEmitter, ViewEncapsulation, Input} from '@angular/core';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class RadioComponent implements OnInit {
  @Input() pData;
  addQstForRadio: string = 'Write question...';
  radioArr: any[] = ['click on me'];

  onkeyupRadio(qstR){
    this.addQstForRadio = qstR
  }

  addNewRadio(){
    this.radioArr.push('click on me')
  }

  radioVal(e){
    this.radioArr.splice(e.srcElement.id, 1, e.srcElement.innerText);
      console.log(this.radioArr)
    // console.dir(e)
  }

  constructor() { }

  ngOnInit() {
  }

}

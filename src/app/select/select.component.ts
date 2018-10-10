import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
  @ViewChild('foroption') optionVal:ElementRef;
  select: any[] = [];
  selectOpt: string = 'Write question...';
  x = '';

  onkeyup(e){
      this.selectOpt = e
  }

  addOpt(a){
    this.select.push(a);
    this.optionVal.nativeElement.value = '';
  }

  constructor() { }

  ngOnInit() {
  }

}

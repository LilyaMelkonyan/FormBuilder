import {Component, OnInit, ViewChild, ElementRef, ViewEncapsulation, Input, AfterViewChecked} from '@angular/core';
import {DragulaService} from 'ng2-dragula';
import {FormGroup, FormControl, FormBuilder, Validators} from "@angular/forms";

// class FormElems {
// 	 name: String;
// 	 constructor(n) {
// 		this.name = n;
// 	 }
// }

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {
    @ViewChild('DropformBuilding') drop: ElementRef;
    // items = [
    //   new FormElems('input'),
    //   new FormElems('checkbox'),
    //   new FormElems('radio'),
    //   new FormElems('select option'),
    //   new FormElems('textarea')
    // ];
    items: string[] = [
        'input',
        'checkbox',
        'radio',
        'select option',
        'textarea',
    ];
    newItems = [];
    // copyItem = []
    constructor(private dragulaService: DragulaService, private fbx: FormBuilder) {
        dragulaService.createGroup('FORMBUILDERDRAG', {
            copy: (el, source) => {
                return source.id === 'left';
            },
            copyItem: (elem) => {
                console.log(elem)
                let x = {
                    type: elem
                }
                this.newItems.push(x)
                return elem;
            },
            accepts: (el, target, source, sibling) => {
                if (source.id === 'right') {
                    return;
                }
                return target.id !== 'left';
            }
        });


    }

    // myForm = this.fbx.group({
    //
    // })

    // onsubmitForm(){
    //     console.log('submitted')
    // }

    removeBox(index){
        console.log(this.newItems);
        console.dir(index);
        this.newItems.splice(index,1)
    }

    ngOnInit(){
    }

}

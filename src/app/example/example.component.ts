import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators, FormArray} from '@angular/forms';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {
  countries: string[] = ['Armenia', 'Germany', 'Italy'];
  defaultCountry = 'Italy';
  randMails: string[] = ['lilya606@gmail.com', 'lil.lil93@mail.ru', 'test@mail.ru'];
    aaa='aaa';

    profileForm = this.fb.group({
        name: ['', [
            Validators.required,
            Validators.minLength(4)
            ]
        ],
        email: ['', [
            Validators.required,
            Validators.email
            ]
        ],
        country: ['', Validators.required]
    })


    get name() { return this.profileForm.get('name'); }
    get email() { return this.profileForm.get('email'); }
    get country() { return this.profileForm.get('country'); }


    sendFormValue(){
        // this.profileForm.get('name').setValue('aaa')
        // this.profileForm.patchValue({
        //     name: 'Lilya',
        //     email: 'lilya606@gmail.com',
        //     country: 'Armenia'
        // });

        console.log(this.profileForm.value)
        // console.dir(Validators)

    }

    randomMail(){
        const randMail = Math.floor(Math.random() * this.randMails.length);
        const randomFileName = this.randMails[randMail];
        this.profileForm.patchValue({
            email: randomFileName
        })
    }
    constructor(private fb: FormBuilder) {}

  ngOnInit() {
      // profileForm = new FormGroup({
      //     name: new FormControl('', [Validators.required]),
      //     email: new FormControl(''),
      //     country: new FormControl(this.countries[0]),
      // });
  }

}

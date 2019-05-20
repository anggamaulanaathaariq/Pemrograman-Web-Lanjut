import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent {
  yourData: boolean;
  // @Input() nama:string;
  // @Input() email:string;
  // @Input() Comment:string;

  data=[
    {nama: '', email: '', comment: ''}
  ]

  log(x) {
    console.log(x);
  }

  submit(form){
    this.yourData = true;
    console.log(form);
    form.valid;
  }
}
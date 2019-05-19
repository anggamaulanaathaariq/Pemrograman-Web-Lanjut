import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent {
  @Input() nama:string;
  @Input() email:string;
  @Input() Comment:string;

  log(z) {
    console.log(z);
  }

  submit(form){
    console.log(form);
    form.valid;
  }
}
import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-member',
  templateUrl: './form-member.component.html',
  styleUrls: ['./form-member.component.css'],
  // template: `
  // <input #box (formmember.submit)="onEnter=(box.value)">
  // <p>{{value}}</p>

})
export class FormMemberComponent implements OnInit {
  FormMemberComponent: FormGroup;
  // submitted  = false;
  @Input() nama:string;
  @Input() email:string;
  @Input() Comment:string;

  // constructor(private formBuilder: FormBuilder) { }
  constructor() { }

  ngOnInit(){
    this.FormMemberComponent = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email])
    });}
    get input() { return this.FormMemberComponent.get('email'); }
}
//   ngOnInit() {
//     this.FormMemberComponent= this.formBuilder.group({
//       nama: ['', Validators.required],
//       email: ['', [Validators.required, Validators.email]],
//     });
//   }
//   get f() { return this.FormMemberComponent.controls; }

//   onSubmit() {
//     this.submitted = true;

//     // stop here if form is invalid
//     if (this.FormMemberComponent.invalid) {
//         return;
//     }

//     alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.FormMemberComponent.value))
// }
//     }
// export class FormMemberComponent {
//   log(x) {
//     console.log(x);
//   }

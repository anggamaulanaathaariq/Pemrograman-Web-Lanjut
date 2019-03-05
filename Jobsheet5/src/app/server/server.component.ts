import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  template: `<h1> hello {{name}} </h1>`,
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  name:string="angular"
  constructor() { }

  ngOnInit() {
  }

}

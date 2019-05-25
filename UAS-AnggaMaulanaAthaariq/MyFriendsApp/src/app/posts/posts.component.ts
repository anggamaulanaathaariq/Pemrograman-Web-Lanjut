import { Component } from '@angular/core';
import { FilterPipe } from 'ngx-filter-pipe';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  userFilter: any = { name: '' };

  coursesForOne=[
    // {id:1, name:'Angga', email:'am.athaariq@gmail.com', contact:'082199091314'}
    ]
    constructor(private filterPipe: FilterPipe) {
      console.log(filterPipe.transform(this.coursesForOne, { name: ''}));
    }
      submit(form){
        this.coursesForOne.push({id: this.coursesForOne.length + 1, name: this.uppercase(form.nama), email: form.email, contact: form.contact});
       
       }
       uppercase(nama){
        return nama.toUpperCase();  
      }
    }
 
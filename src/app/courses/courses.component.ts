import { Component, OnInit } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  Courses;
  title = 'INI Tugas Pertama Biodata';
  date = new Date();

  get format(){
    return 'fullDate';
  }
  

  constructor(private service:CoursesService) { 
    this.Courses=service.getCourses();
  }

  ngOnInit() {
  }

}

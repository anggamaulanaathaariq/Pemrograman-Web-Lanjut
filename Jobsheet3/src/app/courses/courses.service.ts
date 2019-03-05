import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() { }

  getCourses(){
    return [
    // {id: 0, name: 'HTML'},
    // {id: 1, name: 'PHP'},
    // {id: 2, name: 'ANGULAR'},
    // {id: 3, name: 'C#'},
    // {id: 4, name: 'VB.NET'},
    {no: 1, Hobby: 'berlari', Keterangan: 'Lari 1 jam tiap hari'},
    {no: 2, Hobby: 'senam', Keterangan: 'Senam tiap sore'},
    {no: 3, Hobby: 'bermain musik', Keterangan: 'Bermain musik saat waktu senggang'},
    // {name: 'author2'},
    // {name: 'author3'},
  ];
  }
}

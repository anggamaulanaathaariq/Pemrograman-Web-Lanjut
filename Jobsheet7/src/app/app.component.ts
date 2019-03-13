// import { FavoriteChangeEventArgs } from './favorite/favorite.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'belajar-angular';
  courses=[1,2];

  viewMode='map';
  // post={
  //   titles:"ini post",
  //   isFavorite:true
  // }

  // onFavoriteChanged(eventArgs:FavoriteChangeEventArgs){
  //   console.log("Favorite changed:",eventArgs);
  // }
}

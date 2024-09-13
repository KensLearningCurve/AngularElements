import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-movie-rotation',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './movie-rotation.component.html',
  styleUrl: './movie-rotation.component.scss'
})
export class MovieRotationComponent {
  selectedMovie: any = null;

  constructor(http: HttpClient) {
    var url = "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";
    var h = new HttpHeaders();
    h = h.append("Authorization", "Bearer YOUR_KEY_HERE"); // Obtain here: https://www.themoviedb.org/

    http.get(url, { headers: h }).subscribe((x: any) => {
      var random = Math.floor(Math.random() * x.results.length);
      this.selectedMovie = x.results[random];
    });
  }
}

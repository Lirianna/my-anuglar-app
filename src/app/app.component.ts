import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //enables http requests

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  query: string;
  artists: object;

  showArtist(item) {
    this.query = item.name;
    item.highlight = !item.highlight; //toggle
  }

  constructor( private http: HttpClient) {
    this.query = '';
  }

  ngOnInit(): void {
    this.http.get<Object>('../assets/data.json').subscribe(data => {this.artists = data;}) //get data from external file and subscribe changes to variable
  }
}

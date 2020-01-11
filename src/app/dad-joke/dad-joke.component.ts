import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'dad-joke',
  templateUrl: './dad-joke.component.html',
  styleUrls: ['./dad-joke.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DadJokeComponent implements OnInit {
  dadJoke: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getDadJoke();
  }

  getDadJoke() {
    this.http.get('https://icanhazdadjoke.com/', {headers: {Accept: 'application/json'}}).subscribe(response => this.dadJoke = response);
  }
}

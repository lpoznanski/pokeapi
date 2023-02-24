import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Pokemon} from "./models";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pokeapi';
  url = ''
  allPokemons:Pokemon[] = [];
  constructor(private http: HttpClient) {};
  ngOnInit() {
    console.log('aaaaaa')
    this.http.get<any>('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0').subscribe(resp => {
      console.log(resp.results)
      this.allPokemons = resp.results
    })
  };
setpoke(url: string) {
  this.url=url
  console.log(this.url)
}
}



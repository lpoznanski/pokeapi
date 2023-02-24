import {Component, Input, OnChanges} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-pokemondetails',
  templateUrl: './pokemondetails.component.html',
  styleUrls: ['./pokemondetails.component.scss']
})
export class PokemondetailsComponent implements OnChanges {
@Input() url2: string;
pokemon: any;
more = true
constructor(private http:HttpClient) {
}
  ngOnChanges() {
    console.log('aaaaaa')
    this.http.get<any>(this.url2).subscribe(resp => {
      console.log(resp)
      this.pokemon = resp
    })

}}

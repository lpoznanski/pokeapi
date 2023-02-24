import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PokemondetailsComponent} from "./pokemondetails/pokemondetails.component";

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

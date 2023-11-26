import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { PokeApiService } from '../services/poke-api.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  pokemons: any[] = [];
  offset = 0;

  searchTerm = '';

  constructor(private pokeApiService: PokeApiService) {}

  ngOnInit(){
    this.loadPokemon(null);
  }

  loadPokemon(event : any){
    this.pokeApiService.getPokemons(this.offset).subscribe((res: any) => {
      console.log(res);
      this.pokemons.push(res);
      this.offset += 1;
      if (event) {
        event.target.complete();
      }
      if (this.offset < this.offset) {
        this.loadPokemon(event);
      }
    });
  }

  search(){
    const term = this.searchTerm.toLowerCase();
    return this.pokemons.filter(pokemon => 
      pokemon.name.toLowerCase().includes(term) ||
      pokemon.id.toString() === term ||
      pokemon.types.some((type: any) => type.type.name.toLowerCase().includes(term))
    );
  }
}
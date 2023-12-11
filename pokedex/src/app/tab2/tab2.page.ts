import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { PokeApiService } from '../services/poke-api.service';
import { concatMap, catchError, of } from 'rxjs';

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
      of(this.offset).pipe(
        concatMap(offset => this.pokeApiService.getPokemons(offset)),
        catchError(error => {
          console.error(error);
          return of([]);
        })
    ).subscribe((res: any) => {
        // console.log(res);
        this.pokemons.push(res);
        this.pokemons.sort((a, b) => a.id - b.id);
        this.offset += 1;
        if (event) {
          event.target.complete();
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
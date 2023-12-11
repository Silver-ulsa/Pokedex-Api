import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { PokeApiService } from '../services/poke-api.service';

@Component({
  selector: 'app-pokemon-profile',
  templateUrl: './pokemon-profile.page.html',
  styleUrls: ['./pokemon-profile.page.scss'],
})
export class PokemonProfilePage implements OnInit {

  profileId: string | undefined;
  pokemon: any;

  isPressed = false;

  constructor(private activatedRoute : ActivatedRoute, private http : HttpClient, private pokeApiService : PokeApiService) { }

  ngOnInit() {
    this.profileId = this.activatedRoute.snapshot.paramMap.get('id')!;
    this.http.get('https://pokeapi.co/api/v2/pokemon/' + this.profileId).subscribe((res: any) => {
      this.pokemon = res;
      this.checkIfPokemonIsFavorite();
    } );
  }
  

  addFavoritePokemon(){
    const favoritePokemon = this.pokeApiService.favoritePokemons.find(pokemon => pokemon.name === this.pokemon.name);
  
    if (favoritePokemon) {
      this.isPressed = false;
      console.log('se ha eliminado de favoritos a ', this.pokemon.name);
      console.log(this.pokeApiService.favoritePokemons);
      this.pokeApiService.deletFavoritePokemon(this.pokemon);
    } else {
      this.isPressed = true;
      console.log('se ha añadido como favorito a ', this.pokemon.name);
      console.log(this.pokeApiService.favoritePokemons);
      this.pokeApiService.addFavoritePokemon(this.pokemon);
    }
  }

  checkIfPokemonIsFavorite(){
    const favoritePokemon = this.pokeApiService.favoritePokemons.find(pokemon => pokemon.name === this.pokemon.name);
  
    if (favoritePokemon) {
      this.isPressed = true;
    } else {
      this.isPressed = false;
    }
  }

}

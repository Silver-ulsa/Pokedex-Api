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

  getColorByType(type: string){ 
    switch(type){ 
      case 'grass': 
        return '#38BF4B'; 
      case 'poison': 
        return '#B567CE'; 
      case 'fire': 
        return '#FF9741'; 
      case 'flying': 
        return '#89AAE3'; 
      case 'water': 
        return '#3692DC'; 
      case 'bug': 
        return '#83C300'; 
      case 'normal': 
        return '#919AA2'; 
      case 'electric': 
        return '#FFCC00'; 
      case 'ground': 
        return '#E87236'; 
      case 'fairy': 
        return '#FB89EB'; 
      case 'fighting': 
        return '#E0306A'; 
      case 'psychic': 
        return '#FF6675'; 
      case 'rock': 
        return '#C8B686'; 
      case 'steel': 
        return '#5A8EA2'; 
      case 'ice': 
        return '#4CD1C0'; 
      case 'ghost': 
        return '#4C6AB2'; 
      case 'dragon': 
        return '#7038f8'; 
      case 'dark': 
        return '#705848';
      default:
          return '#000';
    }
  }

  getColorByTypeChip(type: string){ 
    switch(type){ 
      case 'grass': 
        return '#35A349'; 
      case 'poison': 
        return '#9343AD'; 
      case 'fire': 
        return '#D48341'; 
      case 'flying': 
        return '#6687C1'; 
      case 'water': 
        return '#337FBD'; 
      case 'bug': 
        return '#71A60D'; 
      case 'normal': 
        return '#6E7881'; 
      case 'electric': 
        return '#fae078'; 
      case 'ground': 
        return '#C95A22'; 
      case 'fairy': 
        return '#D066C1'; 
      case 'fighting': 
        return '#B22755'; 
      case 'psychic': 
        return '#CB3F4D'; 
      case 'rock': 
        return '#8C7841'; 
      case 'steel': 
        return '#42768A'; 
      case 'ice': 
        return '#2CAE9E'; 
      case 'ghost': 
        return '#37518F'; 
      case 'dragon': 
        return '#566fbe'; 
      case 'dark': 
      return '#A29288';
      default:
        return '#000';
    }
  }

}

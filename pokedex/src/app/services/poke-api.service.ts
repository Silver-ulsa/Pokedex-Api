import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, mergeMap } from 'rxjs/operators';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  constructor(private http: HttpClient) { }

  getPokemons(){
    return this.http.get<any>('https://pokeapi.co/api/v2/pokemon/').pipe(
      mergeMap((response: any) => from(response.results)),
      mergeMap((pokemon: any) => this.http.get(pokemon.url)),
    );
  }

}

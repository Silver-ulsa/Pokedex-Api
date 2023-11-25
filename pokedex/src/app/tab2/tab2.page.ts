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

  constructor(private pokeApiService: PokeApiService) {}

  ngOnInit(){
    this.pokeApiService.getPokemons().subscribe((res: any) => {
      console.log(res);
      this.pokemons.push(res);
    });
  }
}

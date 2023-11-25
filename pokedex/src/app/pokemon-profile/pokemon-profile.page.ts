import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pokemon-profile',
  templateUrl: './pokemon-profile.page.html',
  styleUrls: ['./pokemon-profile.page.scss'],
})
export class PokemonProfilePage implements OnInit {

  profileId: string | undefined;
  pokemon: any;

  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.profileId = this.activatedRoute.snapshot.paramMap.get('id')!;
    this.http.get('https://pokeapi.co/api/v2/pokemon/' + this.profileId).subscribe((res: any) => {
      this.pokemon = res;
    } );
  }

}

import { Component, OnInit } from '@angular/core';
import { PokeApiService } from '../services/poke-api.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  favoriteList : any[] = [];

  constructor(private pokeApiService : PokeApiService, private alertController: AlertController) { }

  ngOnInit() {
    this.showFavoritePokemons();
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter');
    this.favoriteList = this.pokeApiService.getFavoritePokemons();
    this.showFavoritePokemons()
}

showFavoritePokemons(){
    this.favoriteList = this.pokeApiService.getFavoritePokemons();
    if(this.favoriteList.length === 0) { // Si favoriteList está vacía
      this.presentAlert(); // Muestra la alerta
    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'There are no favorites',
      message: "You don't have any pokemon in your favorites list",
      buttons: ['OK']
    });
    await alert.present();
  }

}

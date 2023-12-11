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

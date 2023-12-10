import { Component } from '@angular/core';
import { PokeApiService } from '../services/poke-api.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  constructor(private pokeApiService: PokeApiService, private alertController: AlertController) {}

  async showAlert(message:string) {
    const alert = await this.alertController.create({
      header: 'Result',
      message: message,
      buttons: ['OK']
    });

    await alert.present();

    
  }

  quizPokemon: any[] = [];
  selectedPokemon: any;

  ngOnInit() {
    this.quiz();
    console.log("entra la función quiz");
  }

  quiz() {
    for (let i = 1; i <= 3; i++) {
      let random = Math.floor(Math.random() * 890);
      this.pokeApiService.getPokemon(random).subscribe((res: any) => {
        console.log('quiz', res);
        this.quizPokemon.push(res);
        this.selectedPokemon = this.quizPokemon[Math.floor(Math.random() * this.quizPokemon.length)];
      });
    }
  }

  verifyAnswer(buttonValue: string) {
    let isCorrect = buttonValue === this.selectedPokemon.name;
    for (let pokemon of this.quizPokemon) {
      if (pokemon.name === buttonValue) {
        pokemon.color = isCorrect ? 'success' : 'danger';
      }
      pokemon.disabled = true;
    }

    this.showAlert(isCorrect ? 'Right Answer' : 'Bad Answer');

  }

  resetQuiz() {
    this.quizPokemon = [];
    this.quiz();
  }

}

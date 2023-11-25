import { Component, OnInit } from '@angular/core';
import {AlertController} from '@ionic/angular';
@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  constructor( public alertController:AlertController) 
  {
    
  }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertController.create ({
      header: '¿Seguro que desea Ordenar?',
      subHeader: 'Ordenar',
      message: '¿Seguro que desea ordenar?',
      buttons: ['Ordenar', 'Cancelar']
    });
    await alert.present();

  }

  async presentAlertaPrompt(){
    const alert = await this.alertController.create({
      header: 'Ingrese su nombre',
      inputs: [
        {
          name:'nombre',
          type: 'text',
          placeholder: 'nombre completo'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) =>{
            console.log ('Botón de cancelar presionado');
          }
        },
        {
          text: 'Okay',
          handler: () => {
            console.log('Boton de OK presionado');
          }
        }
      ]
    });

    await alert.present();

  }
}

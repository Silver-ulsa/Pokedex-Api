import { Component, OnInit } from '@angular/core';
import {ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {

  constructor( public actionSheetController:ActionSheetController) { }

  ngOnInit() {
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header:'Opciones',
      buttons:[
        { 
          text:'Borrar',
          role:'destructive',
          icon:'trash',
          handler:() => {console.log("Ha dado click en borrar")}
        },
        {
          text:'Compartir',
          icon:'share',
          handler:() => {console.log("Ha dado click en compartir")}
        }, 
        {
          text:'Play',
          icon:'caret-forward-outline',
          handler:() => {console.log("Ha dado click en Play")}
        },
        {
          text:'Favorito',
          icon:'heart',
          handler:() => {console.log("Ha dado click en Favorito")}
        },
        {
          text:'Cancelar',
          icon:'close',
          role:'cancel',
          handler:() => {console.log("Ha dado click en Cancelar")}
        }
      ]
    });

    await actionSheet.present();
  }
}

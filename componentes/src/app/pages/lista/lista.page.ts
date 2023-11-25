import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {

  usuarios: Observable<any> | undefined ;

  constructor( private DataService: DataService, private toastController: ToastController ) { }

  ngOnInit() {
    this.usuarios = this.DataService.getUsers();
  }

  async presentToast( message: string ){
    const toast = await this.toastController.create({
      message,
      duration: 2000,
    })
    toast.present();
  }

  async presentToastWithOptions(){
    const toast = await this.toastController.create({
      header: "Contacto agregado a favoritos",
      message: "Ok para continuar",
      position: "top",
      buttons:[
        {
          side: "start",
          icon: "star",
          text: "Favoritos",
          handler: () => {console.log('Seleccionado Favoritos');},
        },
        {
          text: "Ok",
          role: "cancel",
          handler: () => {
          console.log('cancelar selección');}
        }
      ]
    })
    toast.present();
  }

  favorito( user: any ) {
    this.presentToastWithOptions();
  }
  
  compartir( user: any ) {
    this.presentToastWithOptions();
  }

  borrar( user: any ) {
    this.presentToastWithOptions();
  }

}

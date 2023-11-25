import { Component, OnInit } from '@angular/core';
import {ItemReorderEventDetail} from '@ionic/angular';

@Component({
  selector: 'app-listreorder',
  templateUrl: './listreorder.page.html',
  styleUrls: ['./listreorder.page.scss'],
})
export class ListreorderPage implements OnInit {

  personajes = ['Superman', 'Batman', 'Aquaman', 'Flash', 'Mujer Maravilla']

  constructor() { }

  ngOnInit() {
  }

  handleReorder(ev:CustomEvent<ItemReorderEventDetail>){
    console.log('Dragged from index', ev.detail.from, 'to', ev.detail.to);
    ev.detail.complete();
  }

}

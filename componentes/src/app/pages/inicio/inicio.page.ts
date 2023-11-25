import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  // componentes: any[] = [];
  componentes : Componente[] = [
  {
    icon: 'arrow-forward-outline',
    name: 'Action Sheet',
    redirecTo: '/action-sheet'
  },
  {
    icon: 'alert-outline',
    name: 'Alert',
    redirecTo: '/alert'
  },
  {
    icon: 'card',
    name: 'Cards',
    redirecTo: '/card'
  },
  {
    icon: 'beaker',
    name: 'Avatar',
    redirecTo: '/avatar'
  },
  {
    icon: 'radio-button-on',
    name: 'Botones',
    redirecTo: '/botones'
  },
  {
    icon: 'checkbox',
    name: 'Checkbox',
    redirecTo: '/check'
  },
  {
    icon: 'calendar',
    name: 'Data time',
    redirecTo: '/datetime'
  },
  {
    icon: 'compass',	
    name: 'Fab',
    redirecTo: '/fab'
  },
  {
    icon: 'grid',	
    name: 'Grid',
    redirecTo: '/grid'
  },
  {
    icon: 'reorder-three-outline',	
    name: 'Reordenar Listas',
    redirecTo: '/listreorder'
  },
  {
    icon: 'list-outline',	
    name: 'Lista desde JSON',
    redirecTo: '/lista'
  },
  {
    icon: 'arrow-down-outline',	
    name: 'Refresher',
    redirecTo: '/refresher'
  },
  ];

  constructor() { }

  ngOnInit() {
  }
}

interface Componente {
  icon:string;
  name:string;
  redirecTo:string;
}

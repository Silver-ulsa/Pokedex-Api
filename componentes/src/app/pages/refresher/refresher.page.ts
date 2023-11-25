import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-refresher',
  templateUrl: './refresher.page.html',
  styleUrls: ['./refresher.page.scss'],
})
export class RefresherPage implements OnInit {

  items: any[] = [];

  constructor() { }

  ngOnInit() {
  }
  handleRefresh (event: any) {
    setTimeout(() => {
      this.items = Array(40);
      event.target.complete();
    }, 2000);
  
  }
}

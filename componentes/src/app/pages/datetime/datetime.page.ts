import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datetime',
  templateUrl: './datetime.page.html',
  styleUrls: ['./datetime.page.scss'],
})
export class DatetimePage implements OnInit {
  fechaNacimiento!: Date;

  constructor() { }

  ngOnInit(): void {
    this.fechaNacimiento = new Date();
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  animals: Array<any>;

  constructor() {
    this.animals = [];

    this.animals.push({
      name: 'CHAT',
      text: 'Miaou',
    });

    this.animals.push({
      name: 'CHIEN',
      text: 'Waouf',
    });
  }
}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() name!: string;
  @Input() text!: string;

  imgPath!: string;

  constructor() { }

  ngOnInit(): void { 
    this.imgPath = 'assets/'+ this.name.toLowerCase() + '.jpeg';
  }
    
  onClickButton() {
    alert(this.text);
  }
}

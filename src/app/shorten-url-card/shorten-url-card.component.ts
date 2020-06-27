import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shorten-url-card',
  templateUrl: './shorten-url-card.component.html',
  styleUrls: ['./shorten-url-card.component.scss']
})
export class ShortenUrlCardComponent implements OnInit {

  constructor() { }

  isFlipped = false;

  ngOnInit(): void {
  }

  flip(){
    this.isFlipped = !this.isFlipped;
    console.log('is flipped: ' + this.isFlipped)
  }

}

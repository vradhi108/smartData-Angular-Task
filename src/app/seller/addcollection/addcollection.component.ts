import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
interface Card {
  title: string;
  source: string;
  description: string;
}
@Component({
  selector: 'app-addcollection',
  templateUrl: './addcollection.component.html',
  styleUrls: ['./addcollection.component.scss']
})
export class AddcollectionComponent {
  ngOnInit(){
    let getcollections = localStorage.getItem('collections');
    this.cards = getcollections? JSON.parse(getcollections): null;
  }
title: any;
source: any;
description: any;
  cards: Card[] = [];

  createCard() {
    this.title = prompt('Enter the name of your collection');
    this.source = prompt('Enter the source of the image');
    this.description = prompt('Enter description of your collection');
    this.cards.push({
      title: this.title,
      source: this.source,
      description: this.description
    });
    
    localStorage.setItem('collections', JSON.stringify(this.cards));
    let getcollections = localStorage.getItem('collections');
    this.cards = getcollections? JSON.parse(getcollections): null;
    
   
   console.log(this.title)
  }

}
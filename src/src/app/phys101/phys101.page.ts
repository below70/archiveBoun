import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-phys101',
  templateUrl: './phys101.page.html',
  styleUrls: ['./phys101.page.scss'],
})
export class Phys101Page  {

  items = [];
  numTimesLeft = 5;

  constructor() {
    this.addMoreItems();
  }

  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      this.addMoreItems();
      this.numTimesLeft -= 1;
      event.target.complete();
    }, 2000);
  }

  addMoreItems() {
    for (let i=0; i<10; i++)
      this.items.push(i);
  }

}
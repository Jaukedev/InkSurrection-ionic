import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sliders',
  templateUrl: 'sliders.component.html',
  styleUrls: ['sliders.component.scss'],
})
export class SlidersComponent {
  openModal = false;
  constructor() {
  }
  onSelectEdit() {
    console.log(this.openModal);
    this.openModal = true;
    console.log(this.openModal);
  }
  closeModal() {
    this.openModal = false;
  }
   ngOnInit() {
     this.openModal = false;
   }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}
  files: File[] = [];
  selectedFile = null;
  openModal= false;

  onSelect(event) {
    console.log(event);
    this.files.pop();
    this.files.push(...event.addedFiles);
  }
  onSelectFile(event) {
    console.log(event);
    this.selectedFile = event;
    this.openModal = true;
    console.log(this.openModal);
  }
  closeModal() {
    this.openModal = false;
    this.selectedFile = null;
  }

  onRemove(event) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }
}

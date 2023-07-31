import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-create-note-button',
  templateUrl: './create-note-button.component.html',
  styleUrls: ['./create-note-button.component.scss']
})
export class CreateNoteButtonComponent {
  @Output() clickCreateNoteButton = new EventEmitter()

  constructor() { }

  onClickCreateNoteButton() {
    this.clickCreateNoteButton.emit();
  }
}

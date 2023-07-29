import { Component, OnInit } from '@angular/core';
import { NotesFacade } from '../../store/notes.facade';

@Component({
  selector: 'app-notes-page',
  templateUrl: './notes-page.component.html',
  styleUrls: ['./notes-page.component.scss']
})
export class NotesPageComponent {

  public readonly status$ = this.facade.status$;

  constructor(private facade: NotesFacade) {
    this.facade.init();
  }

  onClickCreateNoteButton() {
console.log('it works')
  }

}

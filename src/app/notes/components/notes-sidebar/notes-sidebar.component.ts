import { Component, OnInit } from '@angular/core';
import { NotesFacade } from '../../store/notes.facade';

@Component({
  selector: 'app-notes-sidebar',
  templateUrl: './notes-sidebar.component.html',
  styleUrls: ['./notes-sidebar.component.scss']
})
export class NotesSidebarComponent {

  public readonly notes$ = this.facade.notes$;
  public readonly selectedNoteId$ = this.facade.selectedNoteId$;

  constructor(private facade: NotesFacade) { }

  onNoteSelectNote(id: number) {
    console.log(id)
    this.facade.assignSelectNoteId(id)
  }
}

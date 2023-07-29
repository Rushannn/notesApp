import { Component, OnInit } from '@angular/core';
import { NotesFacade } from '../../store/notes.facade';

@Component({
  selector: 'app-note-viewer',
  templateUrl: './note-viewer.component.html',
  styleUrls: ['./note-viewer.component.scss']
})
export class NoteViewerComponent {
  public readonly noteEntities$ = this.facade.noteEntities$;
  public readonly selectedNoteId$ = this.facade.selectedNoteId$;

  constructor(private facade: NotesFacade) { }
}

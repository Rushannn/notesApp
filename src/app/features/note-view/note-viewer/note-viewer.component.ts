import { Component, Input, OnInit } from '@angular/core';
import { Note } from 'src/app/pages/notes-page/notes-page.component';

@Component({
  selector: 'app-note-viewer',
  templateUrl: './note-viewer.component.html',
  styleUrls: ['./note-viewer.component.scss']
})
export class NoteViewerComponent implements OnInit {
  @Input() item: Note;
  @Input() selectedNoteId: number;

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as NotesActions from '../../store/notes.actions';

@Component({
  selector: 'app-notes-page',
  templateUrl: './notes-page.component.html',
  styleUrls: ['./notes-page.component.scss']
})
export class NotesPageComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(NotesActions.loadNotes());
  }

}

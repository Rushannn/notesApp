import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { LoadingStatus, selectAllNotes, selectNoteEntities, selectNoteIds, selectNotesStatus, selectSelectedNoteId } from "./notes.reducer";
import * as NotesActions from './notes.actions';
import { filter, map, take, tap, withLatestFrom } from "rxjs/operators";
import { NoteEntity } from "../models/note-entity.model";
import { Observable } from "rxjs";

@Injectable()
export class NotesFacade {

  public readonly notes$: Observable<NoteEntity[]> = this.store.select(selectAllNotes);
  public readonly status$: Observable<LoadingStatus> = this.store.select(selectNotesStatus);
  public readonly noteIds$: Observable<string[] | number[]> = this.store.select(selectNoteIds);
  public readonly noteEntities$ = this.store.select(selectNoteEntities);
  public readonly selectedNoteId$: Observable<number> = this.store.select(selectSelectedNoteId);

  constructor(private store: Store) { }

  public init() {
    this.store.dispatch(NotesActions.loadNotes());
    this.initSelectedNote();
  }

  public assignSelectNoteId(id: string | number) {
    this.store.dispatch(NotesActions.selectNote({ noteId: id }))
  }

  private initSelectedNote() {
    this.noteIds$.pipe(
      filter(ids => ids.length > 0),
    ).subscribe(ids => {
      this.assignSelectNoteId(ids[0])
    });
  }
}

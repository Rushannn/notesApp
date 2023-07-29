import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { LoadingStatus, selectAllNotes, selectNoteEntities, selectNoteIds, selectNotesStatus, selectSelectedNoteId } from "./notes.reducer";
import * as NotesActions from './notes.actions';
import { catchError, exhaustMap, filter, map, switchMap, take, tap, withLatestFrom } from "rxjs/operators";
import { NoteEntity } from "../models/note-entity.model";
import { EMPTY, Observable, of } from "rxjs";
import { selectRouteParam } from "./notes.router.selectors";

@Injectable()
export class NotesFacade {

  public readonly notes$: Observable<NoteEntity[]> = this.store.select(selectAllNotes);
  public readonly status$: Observable<LoadingStatus> = this.store.select(selectNotesStatus);
  public readonly noteIds$: Observable<string[] | number[]> = this.store.select(selectNoteIds);
  public readonly noteEntities$ = this.store.select(selectNoteEntities);
  public readonly selectedNoteId$: Observable<number> = this.store.select(selectSelectedNoteId);


  constructor(private store: Store) { }

  public noteForDetailsPage$ = this.noteEntities$.pipe(
    withLatestFrom(this.store.select(selectRouteParam('id'))),
    switchMap(
      ([entities, id]) => {
        const entity = entities[id];
        if (entity) {
          // If the entity is found in the store, return it as an observable
          return of(entity);
        } else {
          this.store.dispatch(NotesActions.getNote({noteId: id}));
          return this.store.select(selectNoteEntities).pipe(
            // Here, use exhaustMap to prevent multiple getNote actions if this observable emits multiple times
            exhaustMap(() => this.store.select(selectNoteEntities).pipe(
              catchError(() => EMPTY) // Catch any errors that might occur during the API call
            ))
          );
        }
      }
    )
  )

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
      const firstItem = 0;
      this.assignSelectNoteId(ids[firstItem])
    });
  }


}

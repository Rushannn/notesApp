import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { HttpService } from "src/app/services/http.service";
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import * as NotesActions from "./notes.actions";
import { of } from "rxjs";
import { noteDtoAdapter } from '../models/notes-dto.adapter'
import { NoteDTO } from "../models/note-dto.model";

@Injectable()
export class NotesEffects {
  private readonly notesEndpoint = 'notes'

  loadNotes$ = createEffect(
    () => this.actions$.pipe(
      ofType(NotesActions.loadNotes),
      mergeMap(
        () => this.httpService.get<NoteDTO[]>(this.notesEndpoint)
          .pipe(
            map(
              notes => NotesActions.loadNotesSuccess({
                notes: notes.map(note => noteDtoAdapter.DTOtoEntity(note))
              })
            ),
            catchError(() => of(NotesActions.loadNotesFailed()))
          )
      )
    )
  );

  getNote$ = createEffect(
    () => this.actions$.pipe(
      ofType(NotesActions.getNote),
      mergeMap(
        // tap(id => console.log(id)),
        ({noteId}) => this.httpService.get<NoteDTO>(`${this.notesEndpoint}/${noteId}`)
          .pipe(
            map(
              note => NotesActions.getNoteSuccess({
                note: noteDtoAdapter.DTOtoEntity(note)
              }),
              catchError(() => of(NotesActions.loadNotesFailed()))
            )
          )
      )
    )
  );



  constructor(
    private actions$: Actions,
    private httpService: HttpService
  ) { }
}

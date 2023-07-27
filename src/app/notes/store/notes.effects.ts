import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { HttpService } from "src/app/services/http.service";
import { map, mergeMap, catchError } from 'rxjs/operators';
import * as NotesActions from "./notes.actions";
import { Note } from "./notes.reducer";
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
              notes => NotesActions.loadNoteSuccess({
                notes: notes.map(note => noteDtoAdapter.DTOtoEntity(note))
              })
            ),
            catchError(() => of(NotesActions.loadNotesFailed))
          )
      )
    )
  );


  constructor(
    private actions$: Actions,
    private httpService: HttpService
  ) { }
}

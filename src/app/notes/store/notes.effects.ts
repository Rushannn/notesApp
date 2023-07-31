import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { HttpService } from "src/app/services/http.service";
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import * as NotesActions from "./notes.actions";
import { of } from "rxjs";
import { noteDtoAdapter } from '../models/notes-dto.adapter'
import { NoteDTO } from "../models/note-dto.model";
import { NoteEntity } from "../models/note-entity.model";

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
        ({ noteId }) => this.httpService.get<NoteDTO>(`${this.notesEndpoint}/${noteId}`)
          .pipe(
            map(
              noteDto => NotesActions.getNoteSuccess({
                note: noteDtoAdapter.DTOtoEntity(noteDto)
              }),
              catchError(() => of(NotesActions.loadNotesFailed()))
            )
          )
      )
    )
  );

  postNote$ = createEffect(
    () => this.actions$.pipe(
      ofType(NotesActions.postNote),
      mergeMap(
        ({ note }) => this.httpService.post<NoteDTO, NoteEntity>(`${this.notesEndpoint}`, note)
          .pipe(
            map(
              noteDto => NotesActions.postNoteSuccess({
                note: noteDtoAdapter.DTOtoEntity(noteDto)
              }),
              catchError(() => of(NotesActions.postNoteFailed()))
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

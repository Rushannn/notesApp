import { createAction, props } from "@ngrx/store";
import { NoteEntity } from "../models/note-entity.model";

export const loadNotes = createAction('[Notes] Load Notes');
export const loadNotesSuccess = createAction('[Notes] Load Notes Success', props<{ notes: NoteEntity[] }>());
export const loadNotesFailed = createAction('[Notes] Notes Failed');

export const selectNote = createAction('[Notes] Select Note', props<{ noteId: string | number }>());

export const getNote = createAction('[Notes] Get Note', props<{ noteId: string }>());
export const getNoteSuccess = createAction('[Notes] Get Note Success', props<{ note: NoteEntity }>());
export const getNoteFailed = createAction('[Notes] Get Note Failed');

export const postNote = createAction('[Notes] Post Note', props<{ note: NoteEntity }>());
export const postNoteSuccess = createAction('[Notes] Post Note Success', props<{ note: NoteEntity }>());
export const postNoteFailed = createAction('[Notes] Post Note Failed');